// Import necessary libraries and dependencies
import type { Image as CSImage } from 'cornerstone-core';
import UTIF from 'utif2';
import type { ProcessedImg } from './processor';

const createMeta = (imageId: string) => {
  const urlParams = new URLSearchParams(imageId.split('?')[1] || '');
  return {
    windowCenter: Number(urlParams.get('wl')) || undefined,
    windowWidth: Number(urlParams.get('ww')) || undefined
  };
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

export const toImage = (
  img: UTIF.IFD,
  pixels: Uint16Array,
  imageId: string,
  meta?: Partial<CSImage>
) => {
  meta = meta || createMeta(imageId);
  try {
    const rbga = toRGBA(pixels, meta?.windowCenter || 29500, meta?.windowWidth || 2500);
    const scaledRbga = scaleTo50x50(rbga, img.width, img.height);
    const imgd = new ImageData(scaledRbga, 50, 50);
    return imgd;
  } catch (e) {
    console.log(e);
    return undefined;
  }
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

// support only .tiff monochrome 2-byte images
export const getProcessed = (
  data: ArrayBuffer,
  imageId: string,
  meta?: Partial<CSImage>
): ProcessedImg => {
  const ifds = UTIF.decode(data);
  UTIF.decodeImage(data, ifds[0]);
  const image = ifds[0];
  const h = image.height;
  const w = image.width;

  const len = h * w;

  const pixels = new Uint16Array(
    Array.from({ length: len }, (_, i) => (image.data[i * 2 + 1] << 8) + image.data[i * 2])
  );

  const imgd = toImage(image, pixels, imageId, meta);
  return { pixels, w, h, imgd };
};

export const makeTiff = (img: ProcessedImg) => {
  const { h, w } = img;
  const bin = new Uint8Array(
    Array.from({ length: img.w * img.w * 2 }, (_, i) => {
      if (i % 2) {
        return img.pixels[i >> 1];
      } else {
        return img.pixels[i >> 1] >> 8;
      }
    })
  );
  const idf: any = {
    t256: [w],
    t257: [h],
    t258: [16],
    t259: [1],
    t262: [1],
    t273: [1000], // strips offset
    t277: [1],
    t278: [4294967295], // idc
    t279: [2097152], // idc
    t282: [[1, 1]], // idc
    t283: [[1, 1]], // idc
    t296: [1], // idc
    t305: ['WGMLGZ AMOG OS']
  };

  const prfx = new Uint8Array(UTIF.encode([idf]));
  // const img = new Uint8Array(rgba);
  const data = new Uint8Array(1000 + w * h * 4);
  for (let i = 0; i < prfx.length; i++) data[i] = prfx[i];
  for (let i = 0; i < bin.length; i++) data[1000 + i] = bin[i];
  // const tiff = sus(data, w, h, ifd);

  return data.buffer;
  // downloadBin('img.tiff', data.buffer);
};

self.onmessage = (e) => {
  if (e.data?.fn === 'makeTiff') {
    const { img, id } = e.data;

    const response = makeTiff(img);
    self.postMessage({ id, response, fn: e.data.fn });
  } else {
    const { data, imageId, meta } = e.data;
    const result = getProcessed(data, imageId, meta);
    self.postMessage({ imageId, result });
  }
};
