(function() {
  'use strict';
  var html, u;
  u = require('../utils');
  html = document.documentElement;
  if (!html) {
    return;
  }
  if (u.hasTouch()) {
    html.classList.add('no-hover');
  } else {
    html.classList.add('no-touch');
  }
  if (!u.hasPlaceholder()) {
    html.classList.add('no-placeholder');
  }
  if (!u.hasPointerEvents()) {
    html.classList.add('no-pointer-events');
  }
})();
