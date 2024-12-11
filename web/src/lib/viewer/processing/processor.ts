import type { Image as CSImage } from 'cornerstone-core';
import UTIF from 'utif2';
// import { getProcessedImgById } from './impostor';
import { processed_storage } from './storage';
import { getProcessedImgById } from './impostor';
import * as cornerstone from '@cornerstonejs/core';
// import { createMeta } from '.';

export const createMeta = (imageId: string) => {
  const urlParams = new URLSearchParams(imageId.split('?')[1] || '');
  return {
    windowCenter: Number(urlParams.get('wl')) || undefined,
    windowWidth: Number(urlParams.get('ww')) || undefined
  };
};

export interface ProcessedImg {
  pixels: Uint16Array | Float32Array;
  w: number;
  h: number;
  url?: string;
  imgd?: ImageData;
}

const worker = new Worker(new URL('./imageProcessorWorker.ts', import.meta.url), {
  type: 'module'
});

const pendingRequests = new Map<string, { resolve: any; reject: any }>();

worker.onmessage = (e) => {
  if (e.data?.fn === 'makeTiff') {
    const { id, response } = e.data;

    const promiseHandlers = pendingRequests.get(id);
    if (promiseHandlers) {
      promiseHandlers.resolve(response);
      pendingRequests.delete(id);
    }
  } else {
    const { imageId, result } = e.data;

    const promiseHandlers = pendingRequests.get(imageId);
    if (promiseHandlers) {
      const { imgd } = result;
      result.url = createUrl(imgd);
      promiseHandlers.resolve(result);
      pendingRequests.delete(imageId);
    }
  }
};

worker.onerror = (error) => {
  pendingRequests.forEach((handlers, id) => {
    handlers.reject(error);
    pendingRequests.delete(id);
  });
};

const toRGBA = (pixels: Uint16Array | Float32Array, wl: number, ww: number) => {
  const rbga = new Uint8ClampedArray(pixels.length * 4);

  pixels.forEach((val, idx) => {
    const up = wl + ww / 2;
    const low = wl - ww / 2;

    let r = val;
    r -= low;
    r *= 255 / ww;
    if (r < 0) r = 0;
    if (r > 255) r = 255;
    const brighness = r;

    rbga[idx * 4 + 0] = brighness;
    rbga[idx * 4 + 1] = brighness;
    rbga[idx * 4 + 2] = brighness;
    rbga[idx * 4 + 3] = 255;
    // const shifted =
  });
  return rbga;
};

function scaleTo50x50(
  originalPixels: Uint8ClampedArray,
  originalWidth: number,
  originalHeight: number
) {
  const targetWidth = 50;
  const targetHeight = 50;
  const scaledPixels = new Uint8ClampedArray(targetWidth * targetHeight * 4); // *4 for RGBA

  for (let y = 0; y < targetHeight; y++) {
    for (let x = 0; x < targetWidth; x++) {
      // Calculate the corresponding x and y coordinates in the original image
      const srcX = Math.floor((x * originalWidth) / targetWidth);
      const srcY = Math.floor((y * originalHeight) / targetHeight);
      const srcIdx = (srcY * originalWidth + srcX) * 4;

      // Copy the pixel data
      scaledPixels[(y * targetWidth + x) * 4] = originalPixels[srcIdx]; // R
      scaledPixels[(y * targetWidth + x) * 4 + 1] = originalPixels[srcIdx + 1]; // G
      scaledPixels[(y * targetWidth + x) * 4 + 2] = originalPixels[srcIdx + 2]; // B
      scaledPixels[(y * targetWidth + x) * 4 + 3] = originalPixels[srcIdx + 3]; // A
    }
  }

  return scaledPixels;
}

export const updateImgUrl = (img: ProcessedImg, imageId: string, meta?: Partial<CSImage>) => {
  const pixels = img.pixels;
  meta = meta || createMeta(imageId);
  const rbga = toRGBA(pixels, meta?.windowCenter || 29500, meta?.windowWidth || 2500);
  const scaledRbga = scaleTo50x50(rbga, img.w, img.h);
  const imgd = new ImageData(scaledRbga, 50, 50);
  const url = createUrl(imgd);
  img.url = url;
  return img;
};

const createUrl = (imgd: ImageData) => {
  const cnv = document.createElement('canvas');
  const ctx = cnv.getContext('2d');
  cnv.width = imgd.width;
  cnv.height = imgd.height;
  ctx?.putImageData(imgd, 0, 0);

  const url = cnv.toDataURL('image/jpeg');
  return url;
};
// support only .tiff monochrome 2-byte images
export const getProcessed = async (
  data: ArrayBuffer,
  imageId: string,
  meta?: Partial<CSImage>
): Promise<ProcessedImg> => {
  return new Promise((resolve, reject) => {
    pendingRequests.set(imageId, { resolve, reject });

    worker.postMessage({ imageId, data, meta });
  });
};

export const makeTiff = (img: ProcessedImg): Promise<ArrayBuffer> => {
  return new Promise((resolve, reject) => {
    const id = String(Math.random());
    pendingRequests.set(id, { resolve, reject });
    worker.postMessage({ id, img, fn: 'makeTiff' });
  });
};

export const calcD = (n: number, I: ProcessedImg | null, D: ProcessedImg | null): ProcessedImg => {
  if (!D && !I) throw Error('I or D must be provided');
  if (!D) return I as ProcessedImg;
  if (!I) return D as ProcessedImg;

  if (I.h !== D.h || I.w !== D.w)
    throw Error(`images dimensions don't match I:${I.w}x${I.h} D:${D.w}x${D.h}`);
  if (n <= 0) throw Error(`n=${n} must be > 0`);

  const avg = (i: number) => (((n - 1) * D.pixels[i] + I.pixels[i]) / n) >> 0;
  const pixels = new Uint16Array(Array.from({ length: I.h * I.w }, (_, i) => avg(i)));
  const { h, w } = I;

  const fin: ProcessedImg = { pixels, h, w };
  return fin;
};

export const calcWWWL = (I: ProcessedImg): { ww: number; wl: number } => {
  let min = Infinity;
  let max = -Infinity;
  let avg = 0;

  const n = I.h * I.w;
  I.pixels.forEach((x) => {
    if (x < min) min = x;
    if (x > max) max = x;
    avg += x / n;
  });

  const wl = avg;

  const ww = max - min;

  return {
    wl,
    ww
  };
  // const avg = (i: number) => (((n - 1) * D.pixels[i] + I.pixels[i]) / n) >> 0;
  // const pixels = new Uint16Array(Array.from({ length: I.h * I.w }, (_, i) => avg(i)));
  // const { h, w } = I;

  // const fin: ProcessedImg = { pixels, h, w };
  // return fin;
};

export const calcAvg = async (image_ids: string[]) => {
  let n = 0;
  let D: ProcessedImg | null = null;

  for (const image_id of image_ids) {
    await cornerstone.imageLoader.loadAndCacheImage(image_id);
    const processed = await getProcessedImgById(image_id);
    if (!processed) throw Error('processed image not found');

    D = calcD(n, processed, D);
    const D_key = `cmpimg_processed:${image_id}_D`;
    processed_storage.set(D_key, D);

    n += 1;
  }

  return D;
};

/**
 * calculates `a + b` pixel wise
 * @param a
 * @param b
 * @returns `a + b`
 */
export const calcSum = (a: ProcessedImg, b: ProcessedImg): ProcessedImg => {
  if (a.h !== b.h || a.w !== b.w)
    throw Error(`images dimensions don't match a:${a.w}x${a.h} b:${b.w}x${b.h}`);

  const pixels = new Float32Array(
    Array.from({ length: a.h * b.w }, (_, idx) => a.pixels[idx] + b.pixels[idx])
  );
  const { h, w } = a;
  const fin: ProcessedImg = { pixels, h, w };
  return fin;
};

/**
 * calculates `a - b` pixel wise
 * @param a
 * @param b
 * @returns `a - b`
 */
export const calcDiff = (a: ProcessedImg, b: ProcessedImg): ProcessedImg => {
  if (a.h !== b.h || a.w !== b.w)
    throw Error(`images dimensions don't match a:${a.w}x${a.h} b:${b.w}x${b.h}`);

  const pixels = new Float32Array(
    Array.from({ length: a.h * b.w }, (_, idx) => a.pixels[idx] - b.pixels[idx])
  );
  const { h, w } = a;
  const fin: ProcessedImg = { pixels, h, w };
  return fin;
};

/**
 * Essentially implements this:
 * ```py
 * pixeldata -= dark_pix
 * if dinamic_dark_calib :
 *     for row in pixeldata :
 *         delta = (row[0] + rowх[-1]) / 2
 *         row -= delta
 * pixeldata = np.where(pixeldata < 0, 0, pixeldata)
 * ```
 */
export const dynamicCalibration = (
  pixeldata: ProcessedImg,
  dark_pix: ProcessedImg,
  dynamic_dark_calib = true
): ProcessedImg => {
  const res = calcDiff(pixeldata, dark_pix);

  if (dynamic_dark_calib) {
    for (let i = 0; i < res.h; ++i) {
      const delta = (res.pixels[res.w * i] + res.pixels[res.w * (i + 1) - 1]) / 2;
      for (let j = res.w * i; j < res.w * (i + 1); ++j) {
        res.pixels[j] -= delta;
      }
    }
    for (let i = 0; i < res.w * res.h; ++i) {
      if (res.pixels[i] < 0) res.pixels[i] = 0;
    }
  }

  return res;
};

export const dynamicCalibrationAll = async (D: ProcessedImg | null, image_ids: string[]) => {
  if (!D) throw Error('No dark filed');

  let n = 0;
  let current_frame: ProcessedImg | null = null;

  const keys: string[] = [];
  for (const image_id of image_ids) {
    await cornerstone.imageLoader.loadAndCacheImage(image_id);
    const processed = await getProcessedImgById(image_id);
    if (!processed) throw Error('processed image not found');

    const res = dynamicCalibration(processed, D);
    const { ww, wl } = calcWWWL(res);
    const key = `cmpimg_processed:${Math.random()}_exposure_frame?wl=${wl}&ww=${ww}`;

    current_frame = calcD(n, res, current_frame);
    current_frame = updateImgUrl(current_frame, key);
    processed_storage.set(key, current_frame);
    keys.push(key);
    n += 1;
  }

  return keys;
};

export const normalizeImage = (img: ProcessedImg, exposure: number): ProcessedImg => {
  // Create a new array to hold the normalized pixels
  let normalizedPixels: Uint16Array | Float32Array;
  if (img.pixels instanceof Uint16Array) {
    normalizedPixels = new Uint16Array(img.pixels.length);
  } else {
    normalizedPixels = new Float32Array(img.pixels.length);
  }

  // Normalize each pixel by the exposure value
  for (let i = 0; i < img.pixels.length; i++) {
    normalizedPixels[i] = img.pixels[i] / exposure;
  }

  // Return the new ProcessedImg object
  return {
    pixels: normalizedPixels,
    w: img.w,
    h: img.h
  };
};

export const calcDD = (
  n: number,
  I: ProcessedImg,
  D: ProcessedImg,
  DD: ProcessedImg | null
): ProcessedImg => {
  if (I.h !== D.h || I.w !== D.w)
    throw Error(`images dimensions don't match I:${I.w}x${I.h} D:${D.w}x${D.h}`);

  if (DD === null) {
    if (n > 0) throw Error(`n=${n} must be <= 0`);

    const pixels = new Float32Array(Array.from({ length: I.h * I.w }, () => 0));
    const { h, w } = I;
    const fin: ProcessedImg = { pixels, h, w };
    return fin;
  } else {
    if (n <= 0) throw Error(`n=${n} must be > 0`);
    const dispersion = (i: number) =>
      ((n - 1) * DD.pixels[i] + Math.pow(I.pixels[i] - D.pixels[i], 2)) / n;
    const pixels = new Float32Array(Array.from({ length: I.h * I.w }, (_, i) => dispersion(i)));
    const { h, w } = I;
    const fin: ProcessedImg = { pixels, h, w };
    return fin;
  }
};

export const calcSTDERR = (DD: ProcessedImg): ProcessedImg => {
  const pixels = new Uint16Array(
    Array.from({ length: DD.h * DD.w }, (_, idx) => Math.floor(Math.sqrt(DD.pixels[idx])))
  );
  const { h, w } = DD;
  const fin: ProcessedImg = { pixels, h, w };
  return fin;
};
