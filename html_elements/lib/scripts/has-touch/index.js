(function() {
  'use strict';
  var DOMContentLoaded;
  DOMContentLoaded = function() {
    var hasTouch, html;
    html = document.documentElement;
    if (!html) {
      return;
    }
    hasTouch = 'ontouchstart' in window ? true : false;
    if (hasTouch) {
      html.classList.add('has-touch');
    } else {
      html.classList.add('has-hover');
    }
  };
  document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
})();
