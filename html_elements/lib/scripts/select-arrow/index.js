(function() {
  'use strict';
  var DOMContentLoaded, hasOwnAbility;
  hasOwnAbility = (function() {
    var style;
    style = document.createElement('a').style;
    style.cssText = 'pointer-events: auto';
    return style.pointerEvents === 'auto';
  })();
  if (hasOwnAbility) {
    return;
  }
  DOMContentLoaded = function() {
    var i, item, items;
    items = document.querySelectorAll('.select__arrow');
    if (!items.length) {
      return;
    }
    for (i = items.length - 1; i >= 0; i += -1) {
      item = items[i];
      item.style.display = 'none';
    }
  };
  document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
})();
