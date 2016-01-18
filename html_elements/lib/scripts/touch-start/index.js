(function() {
  'use strict';
  var DOMContentLoaded, doNothing;
  doNothing = function() {};
  DOMContentLoaded = function() {
    document.body.addEventListener('touchstart', doNothing, false);
  };
  document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
})();
