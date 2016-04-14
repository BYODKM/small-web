(function() {
  'use strict';
  var html, utils;
  utils = require('../utils');
  html = document.documentElement;
  if (!html) {
    return;
  }
  if (utils.hasTouch()) {
    html.classList.add('no-hover');
  } else {
    html.classList.add('no-touch');
  }
  if (!utils.hasPlaceholder()) {
    html.classList.add('no-placeholder');
  }
  if (!utils.hasPointerEvents()) {
    html.classList.add('no-pointer-events');
  }
})();
