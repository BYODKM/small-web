do ->
  'use strict'

  doNothing = ->
    # iOS might needs this.
    return

  DOMContentLoaded = ->
    document.body.addEventListener('touchstart', doNothing, false)
    return

  document.addEventListener('DOMContentLoaded', DOMContentLoaded, false)
  return
