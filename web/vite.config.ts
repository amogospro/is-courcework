import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import UnoCSS from 'unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import topLevelAwait from 'vite-plugin-top-level-await';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { type Connect, type Plugin } from 'vite';

// const crossOriginIsolationMiddleware: Connect.NextHandleFunction = (request, response, next) => {
//   if (request.url === '/service/administration/monitoring') {
//     /* empty */
//   } else if (request.url === '/service/administration/management/storage') {
//     /* empty */
//   } else if (request.url === '/service/administration/management/orthanc') {
//     /* empty */
//   } else {
//     response.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
//     response.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
//   }
//   next();
// };

// const crossOriginIsolation: () => Plugin = () => {
//   return {
//     name: 'cross-origin-isolation',
//     configureServer: (server) => {
//       server.middlewares.use(crossOriginIsolationMiddleware);
//     },
//     configurePreviewServer: (server) => {
//       server.middlewares.use(crossOriginIsolationMiddleware);
//     }
//   };
// };

export default defineConfig({
  plugins: [
    sveltekit(),
    UnoCSS(),
    // nodePolyfills(),
    // tsconfigPaths(),
    topLevelAwait(),
    // crossOriginIsolation()
  ],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },
  resolve: {
    alias: {
      '@cornerstonejs/dicom-image-loader':
        '@cornerstonejs/dicom-image-loader/dist/cornerstoneDICOMImageLoader.bundle.min.js'
    }
  }
});
