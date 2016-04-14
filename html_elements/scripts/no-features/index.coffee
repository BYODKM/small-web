do ->
  'use strict'

  utils = require('../utils')

  html = document.documentElement
  unless html then return

  # .no-hover or .no-touch
  if utils.hasTouch()
    html.classList.add('no-hover')
  else
    html.classList.add('no-touch')

  # .no-placeholder
  unless utils.hasPlaceholder()
    html.classList.add('no-placeholder')

  # .no-pointer-events
  unless utils.hasPointerEvents()
    html.classList.add('no-pointer-events')

  return
