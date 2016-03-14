(function() {
  'use strict';
  var hasPlaceholder, hasPointerEvents, hasTouch, html;
  html = document.documentElement;
  if (!html) {
    return;
  }
  hasTouch = 'ontouchstart' in window;
  if (hasTouch) {
    html.classList.add('no-hover');
  } else {
    html.classList.add('no-touch');
  }
  hasPlaceholder = (function() {
    var input;
    input = document.createElement('input');
    return 'placeholder' in input;
  })();
  if (!hasPlaceholder) {
    html.classList.add('no-placeholder');
  }
  hasPointerEvents = (function() {
    var style;
    style = document.createElement('a').style;
    style.cssText = 'pointer-events: auto';
    return style.pointerEvents === 'auto';
  })();
  if (!hasPointerEvents) {
    html.classList.add('no-pointer-events');
  }
})();
