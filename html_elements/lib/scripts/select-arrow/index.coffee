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
      scope = ev.currentTarget.parentNode
      select = scope.querySelector('select')
      event = document.createEvent('MouseEvents')
      event.initMouseEvent('mousedown', false, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      select.dispatchEvent(event)
      return

    for item in items by -1
      item.addEventListener('click', clicked, false)

    return
  document.addEventListener('DOMContentLoaded', DOMContentLoaded, false)
  return
