do ->
  'use strict'

  hasOwnAbility = do ->
    input = document.createElement('input')
    return 'placeholder' of input

  if hasOwnAbility then return

  focused = ->
    this.classList.remove('is-polyfill')
    if this.value is this.getAttribute('placeholder')
      this.value = ''
    return

  blurred = ->
    if this.value is ''
      this.classList.add('is-polyfill')
      this.value = this.getAttribute('placeholder')
    return

  DOMContentLoaded = ->

    items = document.querySelectorAll('input[placeholder], textarea[placeholder]')
    unless items.length then return

    for item in items by -1
      if item.value is ''
        item.value = item.getAttribute('placeholder')
        item.classList.add('is-polyfill')
        item.addEventListener('focus', focused, false)
        item.addEventListener('blur', blurred, false)

    return
  document.addEventListener('DOMContentLoaded', DOMContentLoaded, false)
  return
