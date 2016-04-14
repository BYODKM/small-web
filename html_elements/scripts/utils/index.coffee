hasPlaceholder = ->
  input = document.createElement('input')
  return 'placeholder' of input

hasPointerEvents = ->
  style = document.createElement('a').style
  style.cssText = 'pointer-events: auto'
  return style.pointerEvents is 'auto'

hasTouch = ->
  return 'ontouchstart' of window

module.exports =
  hasPlaceholder: hasPlaceholder
  hasPointerEvents: hasPointerEvents
  hasTouch: hasTouch
