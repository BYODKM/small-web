do ->
  'use strict'

  html = document.documentElement
  unless html then return

  # .no-hover
  # .no-touch
  hasTouch = ('ontouchstart' of window)
  if hasTouch
    html.classList.add('no-hover')
  else
    html.classList.add('no-touch')

  # .no-placeholder
  hasPlaceholder = do ->
    input = document.createElement('input')
    return 'placeholder' of input
  unless hasPlaceholder
    html.classList.add('no-placeholder')

  # .no-pointer-events
  hasPointerEvents = do ->
    style = document.createElement('a').style
    style.cssText = 'pointer-events: auto'
    return style.pointerEvents is 'auto'
  unless hasPointerEvents
    html.classList.add('no-pointer-events')

  return
