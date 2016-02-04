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
    items = document.querySelectorAll('.select__arrow');
    if (!items.length) {
      return;
    }
    clicked = function(ev) {
      var elm, event;
      elm = ev.currentTarget;
      event = document.createEvent('MouseEvents');
      event.initMouseEvent('mousedown', true, true, window);
      elm.dispatchEvent(event);
    };
    for (i = items.length - 1; i >= 0; i += -1) {
      item = items[i];
      item.addEventListener('click', clicked, false);
    }
  };
  document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
})();
