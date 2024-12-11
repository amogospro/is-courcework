/* eslint-disable @typescript-eslint/ban-ts-comment */
import cornerstone from 'cornerstone-core';
import * as cornerstone_core from '@cornerstonejs/core';
import type { ProcessedImg } from './processor';

export const getDicomImageURL = (image: any) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = image.width;
  canvas.height = image.height;
  cornerstone.renderToCanvas(canvas, image);
  return canvas.toDataURL();
};

export const getProcessedImgById = async (imageId: string) => {
  return await getProcessedImageFromCache(imageId);
};

export const getDicomImageById = async (imageId: string) => {
  return await cornerstone_core.imageLoader.loadAndCacheImage(imageId);
};

export const getProcessedImageFromCache = async (imageId: string): Promise<ProcessedImg> => {
  const image = await getDicomImageById(imageId);
  return {
    pixels: image.getPixelData() as any,
    w: image.width,
    h: image.height,
    url: getDicomImageURL(image)
  };
};
