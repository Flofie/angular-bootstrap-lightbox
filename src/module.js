/**
 * @namespace mdLightbox
 */
angular.module('mdLightbox', [
  'ngMaterial'
]);

// optional dependencies
try {
  angular.module('videosharing-embed');
  angular.module('mdLightbox').requires.push('videosharing-embed');
} catch (e) {}
