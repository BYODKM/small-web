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
      target = ev.currentTarget
      scope = target.parentNode
      select = scope.querySelector('select')
      select.focus() if select
      return

    for item in items by -1
      item.addEventListener('click', clicked, false)

    return
  document.addEventListener('DOMContentLoaded', DOMContentLoaded, false)
  return
