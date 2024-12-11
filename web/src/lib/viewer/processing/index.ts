/* eslint-disable @typescript-eslint/ban-ts-comment */
import { metaData } from '../sampleMetaData';
import type { Image as CSImage } from 'cornerstone-core';
import * as cornerstone from '@cornerstonejs/core';
import axios, { type AxiosBasicCredentials } from 'axios';
// @ts-ignore
import cornerstoneDICOMImageLoader from '@cornerstonejs/dicom-image-loader';
import { createMeta, getProcessed, type ProcessedImg } from './processor';
import { processed_storage, raw_storage } from './storage';

export interface Config {
  auth: AxiosBasicCredentials;
  scheme: string;
  scheme_processed: string;
  blob_processed: string;
}

export const default_config: Config = {
  auth: {
    username: 'orthanc',
    password: 'orthanc'
  },
  scheme: 'cmpimg',
  blob_processed: 'tiff_arraybuffer',
  scheme_processed: 'cmpimg_processed'
};

const createImage = async (data: ArrayBuffer, imageId: string) => {
  const processed = await getProcessed(data, imageId);
  const img = createImageFromProcessed(processed, imageId);
  return img;
};

const createImageFromProcessed = (
  processed: ProcessedImg,
  imageId: string,
  meta?: Partial<CSImage>
) => {
  meta = meta || createMeta(imageId);

  processed_storage.set(imageId, processed);

  const { pixels, w, h } = processed;

  const img: CSImage = {
    imageId,
    color: false,
    columnPixelSpacing: 1,
    rowPixelSpacing: 1,
    rgba: false,
    invert: false,
    slope: 1,
    // intercept:
    columns: w,
    rows: h,
    getPixelData: () => pixels,
    minPixelValue: 0,
    maxPixelValue: 1 << 16,
    sizeInBytes: (w * h) << 1,
    // windowCenter: 1 << 15,
    // windowWidth: 1 << 16
    windowCenter: 29500,
    windowWidth: 2000,
    ...meta
  } as unknown as CSImage;

  return img;
};

const webLoader = async (imageId: string, { scheme, auth }: Config): Promise<CSImage> => {
  const url = imageId.replace(scheme + ':', '');

  const { data } = await axios.get<ArrayBuffer>(url, {
    responseType: 'arraybuffer',
    auth,
    onDownloadProgress(oProgress) {
      if (oProgress.total) {
        const loaded = oProgress.loaded;
        const total = oProgress.total;
        const percentComplete = Math.round((loaded / total) * 100);

        const eventData = {
          imageId,
          loaded,
          total,
          percentComplete
        };

        cornerstone.triggerEvent(
          cornerstone.eventTarget,
          'cornerstoneimageloadprogress',
          eventData
        );
      }
    }
  });

  const imageObject = createImage(data, imageId);

  return imageObject;
};

const blobLoader = async (imageId: string): Promise<CSImage> => {
  let processed = processed_storage.get(imageId);

  if (!processed) {
    const arraybuffer = raw_storage.get(imageId);
    if (!arraybuffer) throw new Error(`blobLoader image with imageId='${imageId}' not found`);
    processed = await getProcessed(arraybuffer, imageId);
  }
  if (!processed)
    throw new Error(`processed (blobLoader) image with imageId='${imageId}' not found`);
  const imageObject = createImageFromProcessed(processed, imageId);
  return imageObject;
};

const rawLoader = async (imageId: string): Promise<CSImage> => {
  const processed = processed_storage.get(imageId);
  if (!processed) throw new Error(`processed image with imageId='${imageId}' not found`);

  const imageObject = createImageFromProcessed(processed, imageId);
  return imageObject;
};

export const init = (config: Config = default_config) => {
  cornerstone.registerImageLoader(config.scheme, (imageId) => {
    cornerstoneDICOMImageLoader.wadors.metaDataManager.add(imageId, metaData);

    const processed = processed_storage.get(imageId);
    let promise: Promise<CSImage>;

    if (processed) {
      promise = new Promise<CSImage>((resolve) =>
        resolve(createImageFromProcessed(processed, imageId))
      );
    } else {
      promise = webLoader(imageId, config);
    }
    return {
      promise
    };
  });

  cornerstone.registerImageLoader(config.scheme_processed, (imageId) => {
    cornerstoneDICOMImageLoader.wadors.metaDataManager.add(imageId, metaData);
    return {
      promise: rawLoader(imageId)
    };
  });

  cornerstone.registerImageLoader(config.blob_processed, (imageId) => {
    cornerstoneDICOMImageLoader.wadors.metaDataManager.add(imageId, metaData);
    return {
      promise: blobLoader(imageId)
    };
  });
  console.log('init done');
};
