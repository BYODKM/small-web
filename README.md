[![Build Status](https://travis-ci.org/internets-inc/small-web.svg?branch=master)](https://travis-ci.org/internets-inc/small-web)

<p align="center">
<img src="http://internets-inc.github.io/small-web/html_elements/single-icon-smallweb@2x.png" alt="" width="256" />
</p>

# small-web

> Small Code for the Larger Site

## TL;DR

This is yet another static site generator.

## Our Goal is

- To make a small and safe front-end development environment for a large site.
- To offer not only Developers but also Designers and Directors to write a code easily.
- To push our users to write a code more semantically and SEO friendly.

## Requirements

- [Node.js](https://nodejs.org/)

## 15 Features

- Zero global install.
- Compiling HTML by [Jade](https://github.com/pugjs/jade).
- Compiling CSS by [Stylus](https://github.com/learnboost/stylus).
- Compiling JS by [CoffeeScript](https://github.com/jashkenas/coffeescript) as optional.
- Bundle JS files by [Browserify](https://github.com/substack/node-browserify).
- [Vue.js](https://github.com/vuejs/vue) is included.
- Built in [Image Sprites](https://github.com/internets-inc/small-web/blob/master/html_elements/sprites/README.md) generator.
- Built in [Style Guide](http://internets-inc.github.io/small-web/html_elements/usage/) generator.
- Built in local server and LiveReload.
- Auto Vendor Prefixing by [kouto-swiss](https://github.com/leny/kouto-swiss).
- Auto publish [pure dist](https://github.com/internets-inc/small-web/tree/gh-pages) to the GitHub Pages by [Travis-CI](https://travis-ci.org/internets-inc/small-web).
- The yields is not required web-root.
- Archive [Atomic Design](http://patternlab.io/about.html) with Jade mixins.
- Ultra thin reset css ([almost nothing](https://github.com/internets-inc/small-web/blob/master/html_elements/styles/prepend/default.styl)).
- Advanced non-destructive reset.css methodology by [morph.css](https://github.com/internets-inc/morph.css).

## Target Browsers

- IE 9+
- Android 4+
- iOS 7+
- Others (last 2 versions)

## Usage

### Initial

```
$ git clone https://github.com/internets-inc/small-web.git
$ cd small-web
$ npm install
$ npm start
```

### Build and Watch

```
$ npm run serve
```

### CSS Image Sprites

```
$ npm run sprite
```

[README.md](./html_elements/sprites/README.md)

## License

MIT

### Acknowledgements

This application makes use of the following third party libraries:

- [ionicons](https://github.com/driftyco/ionicons)
- [morph.css](https://github.com/internets-inc/morph.css)
- [normalize.css](https://github.com/necolas/normalize.css)
- [vue](https://github.com/yyx990803/vue)
