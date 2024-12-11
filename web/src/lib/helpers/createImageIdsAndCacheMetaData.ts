/* eslint-disable @typescript-eslint/ban-ts-comment */
import { api } from 'dicomweb-client';
// @ts-ignore
import dcmjs from 'dcmjs';
import { calculateSUVScalingFactors, type InstanceMetadata } from '@cornerstonejs/calculate-suv';
import { getPTImageIdInstanceMetadata } from './getPTImageIdInstanceMetadata';
import { utilities } from '@cornerstonejs/core';
// @ts-ignore
import cornerstoneDICOMImageLoader from '@cornerstonejs/dicom-image-loader';

import ptScalingMetaDataProvider from './ptScalingMetaDataProvider';
import getPixelSpacingInformation from './getPixelSpacingInformation';
import { convertMultiframeImageIds } from './convertMultiframeImageIds';
import removeInvalidTags from './removeInvalidTags';
import { getAuthHeader } from '$lib/eois';

const { DicomMetaDictionary } = dcmjs.data;
const { calibratedPixelSpacingMetadataProvider } = utilities;

export const cornerstoneDICOMImageLoaderConfigureAuth = () => {
  console.log('finally');
  cornerstoneDICOMImageLoader.configure({
    beforeSend: (xhr: XMLHttpRequest) => {
      xhr.setRequestHeader('Authorization', getAuthHeader());
    }
  });
};

cornerstoneDICOMImageLoaderConfigureAuth();
/**
/**
 * Uses dicomweb-client to fetch metadata of a study, cache it in cornerstone,
 * and return a list of imageIds for the frames.
 *
 * Uses the app config to choose which study to fetch, and which
 * dicom-web server to fetch it from.
 *
 * @returns {Promise<string[]>} An array of imageIds for instances in the study.
 */

export default async function createImageIdsAndCacheMetaData({
  StudyInstanceUID,
  SeriesInstanceUID,
  SOPInstanceUID = null,
  wadoRsRoot,
  auth,
  client = new api.DICOMwebClient({
    url: wadoRsRoot,
    headers: { Authorization: auth },
    singlepart: ''
  })
}: {
  StudyInstanceUID: string;
  SeriesInstanceUID: string;
  SOPInstanceUID?: string | null;
  wadoRsRoot: string;
  auth: string;
  client?: api.DICOMwebClient;
}) {
  const SOP_INSTANCE_UID = '00080018';
  const SERIES_INSTANCE_UID = '0020000E';
  const MODALITY = '00080060';

  const studySearchOptions = {
    studyInstanceUID: StudyInstanceUID,
    seriesInstanceUID: SeriesInstanceUID
  };

  const instances = await client.retrieveSeriesMetadata(studySearchOptions);
  const modality = instances[0][MODALITY]?.Value?.[0];
  let imageIds = instances.map((instanceMetaData) => {
    const SeriesInstanceUID = instanceMetaData[SERIES_INSTANCE_UID]?.Value?.[0];
    const SOPInstanceUIDToUse = SOPInstanceUID || instanceMetaData[SOP_INSTANCE_UID]?.Value?.[0];

    const prefix = 'wadors:';

    const imageId =
      prefix +
      wadoRsRoot +
      '/studies/' +
      StudyInstanceUID +
      '/series/' +
      SeriesInstanceUID +
      '/instances/' +
      SOPInstanceUIDToUse +
      '/frames/1';

    cornerstoneDICOMImageLoader.wadors.metaDataManager.add(imageId, instanceMetaData);
    return imageId;
  });

  // if the image ids represent multiframe information, creates a new list with one image id per frame
  // if not multiframe data available, just returns the same list given
  imageIds = convertMultiframeImageIds(imageIds);

  const instanceNumberTag = '00200013';
  imageIds = imageIds
    .map((imageId) => {
      let instanceMetaData = cornerstoneDICOMImageLoader.wadors.metaDataManager.get(imageId);

      // It was using JSON.parse(JSON.stringify(...)) before but it is 8x slower
      instanceMetaData = removeInvalidTags(instanceMetaData);
      const idx = Number(instanceMetaData[instanceNumberTag].Value);

      if (instanceMetaData) {
        // Add calibrated pixel spacing
        const metadata = DicomMetaDictionary.naturalizeDataset(instanceMetaData);
        const pixelSpacing = getPixelSpacingInformation(metadata);

        if (pixelSpacing) {
          // @ts-ignore
          calibratedPixelSpacingMetadataProvider.add(imageId, {
            // @ts-ignore
            rowPixelSpacing: parseFloat(pixelSpacing[0]),
            // @ts-ignore
            columnPixelSpacing: parseFloat(pixelSpacing[1])
          });
        }
      }
      return [idx, imageId] as const;
    })
    .sort(([a], [b]) => a - b)
    .map(([, imageId]) => imageId);

  // we don't want to add non-pet
  // Note: for 99% of scanners SUV calculation is consistent bw slices
  if (modality === 'PT') {
    const InstanceMetadataArray: InstanceMetadata[] = [];
    imageIds.forEach((imageId) => {
      const instanceMetadata = getPTImageIdInstanceMetadata(imageId);

      if (typeof instanceMetadata.CorrectedImage === 'string') {
        instanceMetadata.CorrectedImage = instanceMetadata.CorrectedImage.split('\\');
      }

      if (instanceMetadata) {
        InstanceMetadataArray.push(instanceMetadata);
      }
    });
    if (InstanceMetadataArray.length) {
      try {
        const suvScalingFactors = calculateSUVScalingFactors(InstanceMetadataArray);
        InstanceMetadataArray.forEach((instanceMetadata, index) => {
          ptScalingMetaDataProvider.addInstance(imageIds[index], suvScalingFactors[index]);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  return imageIds;
}
