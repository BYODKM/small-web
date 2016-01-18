(function() {
  'use strict';
  var DOMContentLoaded;
  DOMContentLoaded = function() {
    var body, clicked, config, html, i, link, links, str;
    if (!document.links.length) {
      return;
    }
    html = document.documentElement;
    body = document.body;
    links = document.links;
    config = {
      duration: 500,
      refreshRate: 15,
      disableClass: 'js-scroll--disabled'
    };
    clicked = function(ev) {
      var currentScrollTop, goal, id, link, scroll, startTime, target, targetScrollTop, touchstart;
      ev.preventDefault();
      link = this;
      id = link.hash.replace(/(^#|\?.*)/g, '');
      target = document.getElementById(id);
      if (id === 'top' && !target) {
        target = document.body;
      }
      if (!target) {
        return;
      }
      touchstart = function(ev) {
        ev.preventDefault();
      };
      body.addEventListener('touchstart', touchstart, false);
      targetScrollTop = function(elm) {
        var px;
        px = 0;
        while (elm) {
          px += elm.offsetTop || 0;
          elm = elm.offsetParent;
        }
        return px;
      };
      goal = targetScrollTop(target);
      if (goal > html.scrollHeight - window.innerHeight) {
        goal = html.scrollHeight - window.innerHeight;
      }
      if (goal < 0) {
        goal = 0;
      }
      currentScrollTop = function() {
        return html.scrollTop || body.scrollTop;
      };
      startTime = new Date();
      scroll = function() {
        var aStep, lapseTime;
        lapseTime = new Date() - startTime;
        aStep = (goal - currentScrollTop()) * lapseTime / config.duration + currentScrollTop();
        if (config.duration > lapseTime + config.refreshRate) {
          window.scrollTo(0, parseInt(aStep));
          setTimeout(scroll, config.refreshRate);
        } else {
          window.scrollTo(0, parseInt(goal));
          body.removeEventListener('touchstart', touchstart, false);
        }
      };
      scroll();
    };
    for (i = links.length - 1; i >= 0; i += -1) {
      link = links[i];
      if (link.classList.contains(config.disableClass)) {
        continue;
      }
      if (link.getAttribute('href').substring(0, 1) !== '#') {
        continue;
      }
      str = link.hash.replace(/(^#|\?.*)/g, '');
      if (str.length) {
        link.addEventListener('click', clicked, false);
      }
    }
  };
  document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
})();
