do ->
  'use strict'

  u = require('../utils')

  html = document.documentElement
  unless html then return

  # .no-hover or .no-touch
  if u.hasTouch()
    html.classList.add('no-hover')
  else
    html.classList.add('no-touch')

  # .no-placeholder
  unless u.hasPlaceholder()
    html.classList.add('no-placeholder')

  # .no-pointer-events
  unless u.hasPointerEvents()
    html.classList.add('no-pointer-events')

  return
