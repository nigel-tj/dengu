/**
 * Check out https://googlechrome.github.io/sw-toolbox/docs/master/index.html for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./dengu/src/build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'dengu-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './dengu/src/build/main.js',
    './dengu/src/build/main.css',
    './dengu/src/build/polyfills.js',
    'index.html',
    'manifest.json'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.cacheFirst);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;