do ->
  'use strict'

  hasOwnAbility = do ->
    style = document.createElement('a').style
    style.cssText = 'pointer-events: auto'
    return style.pointerEvents is 'auto'

  if hasOwnAbility then return

  DOMContentLoaded = ->

    items = document.querySelectorAll('.select__arrow')
    unless items.length then return

    clicked = (ev)->
      elm = ev.currentTarget
      event = document.createEvent('MouseEvents')
      event.initMouseEvent('mousedown', true, true, window)
      elm.dispatchEvent(event)
      return

    for item in items by -1
      item.addEventListener('click', clicked, false)

    return
  document.addEventListener('DOMContentLoaded', DOMContentLoaded, false)
  return
