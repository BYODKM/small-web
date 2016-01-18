do ->
  'use strict'
  DOMContentLoaded = ->

    html = document.documentElement
    unless html then return

    hasTouch = if 'ontouchstart' of window then true else false

    if hasTouch
      html.classList.add('has-touch')
    else
      html.classList.add('has-hover')
    return

  document.addEventListener('DOMContentLoaded', DOMContentLoaded, false)
  return
