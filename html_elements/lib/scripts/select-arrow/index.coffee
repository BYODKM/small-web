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
    item.style.display = 'none' for item in items by -1

    return
  document.addEventListener('DOMContentLoaded', DOMContentLoaded, false)
  return
