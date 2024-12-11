import dicomParser from './customDicomParser/index';
import * as cornerstone from '@cornerstonejs/core';
import * as cornerstoneTools from '@cornerstonejs/tools/dist/umd';
import * as cornerstoneDICOMImageLoader from '@cornerstonejs/dicom-image-loader'; 
import { getAuthHeader } from '$lib/eois'

window.cornerstone = cornerstone;
window.cornerstoneTools = cornerstoneTools;
const { preferSizeOverAccuracy, useNorm16Texture } = cornerstone.getConfiguration().rendering;

export default function initCornerstoneDICOMImageLoader() {
  console.log("Initializing cornerstoneDICOMImageLoader")
  cornerstoneDICOMImageLoader.external.cornerstone = cornerstone;
  cornerstoneDICOMImageLoader.external.dicomParser = dicomParser;
  cornerstoneDICOMImageLoader.configure({
    useWebWorkers: true,
    decodeConfig: {
      convertFloatPixelDataToInt: false,
      use16BitDataType: preferSizeOverAccuracy || useNorm16Texture
    }
  });

  let maxWebWorkers = 1;

  if (navigator.hardwareConcurrency) {
    maxWebWorkers = Math.min(navigator.hardwareConcurrency, 7);
  }

  var config = {
    maxWebWorkers,
    startWebWorkersOnDemand: false,
    taskConfiguration: {
      decodeTask: {
        initializeCodecsOnStartup: false,
        strict: false
      }
    }
  };

  cornerstoneDICOMImageLoader.configure({
    beforeSend: (xhr) => {
      xhr.setRequestHeader('Authorization', getAuthHeader());
    }
  });
  cornerstoneDICOMImageLoader.webWorkerManager.initialize(config);
}
