var hasPlaceholder, hasPointerEvents, hasTouch;

hasPlaceholder = function() {
  var input;
  input = document.createElement('input');
  return 'placeholder' in input;
};

hasPointerEvents = function() {
  var style;
  style = document.createElement('a').style;
  style.cssText = 'pointer-events: auto';
  return style.pointerEvents === 'auto';
};

hasTouch = function() {
  return 'ontouchstart' in window;
};

module.exports = {
  hasPlaceholder: hasPlaceholder,
  hasPointerEvents: hasPointerEvents,
  hasTouch: hasTouch
};
