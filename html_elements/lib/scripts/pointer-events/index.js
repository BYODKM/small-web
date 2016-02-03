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
    var clicked, i, item, items;
    items = document.querySelectorAll('.js-pointerEventsNone');
    if (!items.length) {
      return;
    }
    clicked = function(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    };
    for (i = items.length - 1; i >= 0; i += -1) {
      item = items[i];
      item.addEventListener('click', clicked, false);
    }
  };
  document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
})();
