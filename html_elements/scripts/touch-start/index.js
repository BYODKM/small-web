(function() {
  'use strict';
  var DOMContentLoaded, doNothing;
  doNothing = function() {};
  DOMContentLoaded = function() {
    document.body.addEventListener('touchstart', doNothing);
  };
  document.addEventListener('DOMContentLoaded', DOMContentLoaded);
})();
