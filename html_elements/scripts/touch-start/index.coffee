do ->
  'use strict'

  doNothing = ->
    # iOS might needs this.
    return

  DOMContentLoaded = ->
    document.body.addEventListener('touchstart', doNothing)
    return

  document.addEventListener('DOMContentLoaded', DOMContentLoaded)
  return
