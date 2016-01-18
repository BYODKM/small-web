do ->
  'use strict'
  DOMContentLoaded = ->

    unless document.links.length then return

    html  = document.documentElement
    body  = document.body
    links = document.links

    config =
      duration    : 500
      refreshRate : 15
      disableClass: 'js-scroll--disabled'

    clicked = (ev)->

      ev.preventDefault()
      link = this

      id = link.hash.replace(/(^#|\?.*)/g, '')
      target = document.getElementById(id)

      if id is 'top' and !target
        target = document.body

      unless target then return

      touchstart = (ev)->
        ev.preventDefault()
        return
      body.addEventListener('touchstart', touchstart, false)

      targetScrollTop = (elm)->
        px = 0
        while(elm)
          px += elm.offsetTop || 0
          elm = elm.offsetParent
        return px

      goal = targetScrollTop(target)
      if goal > html.scrollHeight - window.innerHeight then goal = html.scrollHeight - window.innerHeight
      if goal < 0 then goal = 0

      currentScrollTop = -> return html.scrollTop or body.scrollTop
      startTime = new Date()

      scroll = ->
        lapseTime = new Date() - startTime
        aStep = (goal - currentScrollTop()) * lapseTime / config.duration + currentScrollTop()
        if config.duration > lapseTime + config.refreshRate
          window.scrollTo(0, parseInt(aStep))
          setTimeout(scroll, config.refreshRate)
        else
          window.scrollTo(0, parseInt(goal))
          body.removeEventListener('touchstart', touchstart, false)
        return

      scroll()
      return

    for link in links by -1
      if link.classList.contains(config.disableClass) then continue
      if link.getAttribute('href').substring(0, 1) isnt '#' then continue
      str = link.hash.replace(/(^#|\?.*)/g, '')
      if str.length
        link.addEventListener('click', clicked, false)

    return

  document.addEventListener('DOMContentLoaded', DOMContentLoaded, false)
  return
