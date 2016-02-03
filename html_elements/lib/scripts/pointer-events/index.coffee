do ->
  'use strict'

  hasOwnAbility = do ->
    style = document.createElement('a').style
    style.cssText = 'pointer-events: auto'
    return style.pointerEvents is 'auto'

  if hasOwnAbility then return

  DOMContentLoaded = ->

    items = document.querySelectorAll('.js-pointerEventsNone')
    unless items.length then return

    clicked = (ev)->
      ev.preventDefault()
      ev.stopPropagation()
      return

    for item in items by -1
      item.addEventListener('click', clicked, false)

    return
  document.addEventListener('DOMContentLoaded', DOMContentLoaded, false)
  return
