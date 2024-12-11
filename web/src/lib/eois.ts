import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import axios from 'axios';
import { createImageIdsAndCacheMetaData } from './helpers';
// import { PUBLIC_EOIS_URL, PUBLIC_EOIS_PROXY_URL } from '$env/static/public';

export const PUBLIC_API_URL = import.meta.env.DEV ? 'http://localhost:3006/' : 'http://localhost:3005/';
export const PUBLIC_EOIS_PROXY_URL = PUBLIC_API_URL + 'eois/';
export const HD_API_URL = PUBLIC_API_URL + 'hd-api/';
export const IMAGE_COLLECTION_MODULE_URL = PUBLIC_API_URL + 'image_collection_module/';
export const RECONSTRUCTION_MODULE_URL = PUBLIC_API_URL + 'reconstruction_module/';

export const proxy = axios.create({
  baseURL: PUBLIC_EOIS_PROXY_URL
});

export const api = axios.create({
  baseURL: PUBLIC_API_URL
});

export const hd_api = axios.create({
  baseURL: HD_API_URL
});

export const image_collection_module = axios.create({
  baseURL: IMAGE_COLLECTION_MODULE_URL
});

export const reconstruction_module = axios.create({
  baseURL: RECONSTRUCTION_MODULE_URL
});

export const getAuthHeader = () => {
  const token = localStorage.getItem('access_token');
  const header = `Bearer ${token}`;
  return header;
};

export const getIdSession = () => {
  const user_data = localStorage.getItem('user_data') ?? '{}';
  const header = JSON.parse(user_data)['id_session'];
  return header;
};

const instances = [proxy, api, hd_api, image_collection_module, reconstruction_module];
[hd_api, api].forEach((instance) =>
  instance.interceptors.request.use((config) => {
    if (browser) {
      config.headers['idsession'] = getIdSession();
    }
    return config;
  })
);

instances.forEach((instance) =>
  instance.interceptors.request.use((config) => {
    if (browser) {
      config.headers.setAuthorization(getAuthHeader(), true);
      config.headers['idsession'] = getIdSession();
    }

    return config;
  })
);

instances.forEach((instance) =>
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
        if (browser) {
          goto('/');
        }
        return Promise.reject(error);
      } else {
        return Promise.reject(error);
      }
    }
  )
);

export const getImageIdsByAsset = async (asset_id: string) => {
  const StudyInstanceUID = (
    await proxy.post(`/tools/find/`, {
      Level: 'Study',
      Expand: true,
      Query: { PatientName: asset_id }
    })
  ).data?.[0]?.MainDicomTags?.StudyInstanceUID;

  const SeriesInstanceUID = (
    await proxy.post(`/tools/find/`, {
      Level: 'Series',
      Expand: true,
      Query: { PatientName: asset_id }
    })
  ).data?.[0]?.MainDicomTags?.SeriesInstanceUID;
  console.log(StudyInstanceUID, SeriesInstanceUID);

  const token = localStorage.getItem('access_token');
  const stackImageIds = await createImageIdsAndCacheMetaData({
    StudyInstanceUID,
    SeriesInstanceUID,
    wadoRsRoot: `${PUBLIC_EOIS_PROXY_URL}dicom-web`,
    auth: `Bearer ${token}`
  });
  return stackImageIds;
};

// proxy.interceptors.request.use((config) => {
//   if (browser) {
//     // const token = localStorage.getItem('token');
//     // config.headers.setAuthorization(token);
//   }

//   return config;
// });

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error?.response?.status === 401) {
//       if (browser) {
//         goto('/login');
//       }
//       return Promise.reject(error);
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );
