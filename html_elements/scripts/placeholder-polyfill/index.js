(function() {
  'use strict';
  var DOMContentLoaded, blurred, focused, utils;
  utils = require('../utils');
  if (utils.hasPlaceholder()) {
    return;
  }
  focused = function() {
    this.classList.remove('is-polyfilled');
    if (this.value === this.getAttribute('placeholder')) {
      this.value = '';
    }
  };
  blurred = function() {
    if (this.value === '') {
      this.classList.add('is-polyfilled');
      this.value = this.getAttribute('placeholder');
    }
  };
  DOMContentLoaded = function() {
    var i, item, items;
    items = document.querySelectorAll('input[placeholder], textarea[placeholder]');
    if (!items.length) {
      return;
    }
    for (i = items.length - 1; i >= 0; i += -1) {
      item = items[i];
      if (item.value === '') {
        item.value = item.getAttribute('placeholder');
        item.classList.add('is-polyfilled');
        item.addEventListener('focus', focused, false);
        item.addEventListener('blur', blurred, false);
      }
    }
  };
  document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
})();
