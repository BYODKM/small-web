'use strict';

const gulp = require('gulp');

const browserify = require('browserify');
const browserSync = require('browser-sync').create();
const debowerify = require('debowerify');
const del = require('del');
const fs = require('fs');
const jade = require('jade');
const koutoSwiss = require('kouto-swiss');
const path = require('path');
const vinylBuffer = require('vinyl-buffer');
const vinylStream = require('vinyl-source-stream');
const watchify = require('watchify');

const g = {
  bower: require('gulp-bower'),
  coffee: require('gulp-coffee'),
  cssmin: require('gulp-cssmin'),
  data: require('gulp-data'),
  imagemin: require('gulp-imagemin'),
  jade: require('gulp-jade'),
  jshint: require('gulp-jshint'),
  notify: require('gulp-notify'),
  plumber: require('gulp-plumber'),
  rename: require('gulp-rename'),
  spritesmith: require('gulp.spritesmith'),
  stylus: require('gulp-stylus'),
  uglify: require('gulp-uglify'),
  util: require('gulp-util'),
  watch: require('gulp-watch')
};

const config = {
  plumber: {
    errorHandler: g.notify.onError('Error: <%= error.message %>')
  },
  stylus: {
    'include css': true,
    use: [koutoSwiss()]
  },
  cssmin: {
    advanced: false,
    aggressiveMerging: false,
    mediaMerging: true
  },
  jade: {
    basedir: __dirname,
    jade: jade,
    pretty: true
  },
  data: (file) => {
    return {
      __root: file.path.replace(__dirname, '').replace(/[^\/]/g, '').substr(1).replace(/\//g, '..\/'),
      __page: file.path.replace(__dirname, '').replace(/(^\/|\.jade$)/g, '').replace(/\//g, '-')
    }
  },
  coffee: {
    bare: true
  },
  browserify: {
    entries: ['./html_elements/lib/scripts/index.js'],
    transform: ['debowerify']
  },
  uglify: {
    compress: true,
    mangle: true
  },
  browserSync: {
    ui: false,
    files: [
      './html_elements/bundle.css',
      './html_elements/bundle.js'
    ],
    watchOptions: {
      ignoreInitial: true
    },
    server: {
      baseDir: './',
      directory: false
    },
    port: 3000,
    https: false,
    ghostMode: false,
    logPrefix: 'small-web',
    logConnections: true,
    notify: false,
    reloadDelay: 0,
    reloadDebounce: 0,
    startPath: '/html_elements/usage/'
  },
  reload: {
    stream:true
  }
};

gulp.task('clean-bower', (done) => {
  return del(['./bower_components/'], done);
});

gulp.task('bower', ['clean-bower'], () => {
  return g.bower();
});

gulp.task('stylus', () => {
  return gulp.src('./html_elements/lib/main.styl')
    .pipe(g.plumber(config.plumber))
    .pipe(g.stylus(config.stylus))
    .pipe(g.cssmin(config.cssmin))
    .pipe(g.rename('bundle.css'))
    .pipe(gulp.dest('./html_elements/'));
});

gulp.task('watch-stylus', () => {
  g.watch(['./html_elements/lib/**/*.styl'], () => {
    gulp.start('stylus');
  });
});

gulp.task('clean-sprite', (done) => {
  return del(['./html_elements/bundle-*.png'], done);
});

gulp.task('sprite', ['clean-sprite'], (done) => {
  const src = './html_elements/lib/sprites/';
  const now = new Date();
  const time = {
    yyyy: now.getFullYear(),
    mm  : (now.getMonth() + 1 < 10) ? '0' + (now.getMonth() + 1) : '' + (now.getMonth() + 1),
    dd  : (now.getDate()      < 10) ? '0' + now.getDate()        : '' + now.getDate(),
    hh  : (now.getHours()     < 10) ? '0' + now.getHours()       : '' + now.getHours(),
    min : (now.getMinutes()   < 10) ? '0' + now.getMinutes()     : '' + now.getMinutes(),
    sec : (now.getSeconds()   < 10) ? '0' + now.getSeconds()     : '' + now.getSeconds()
  };
  const stamp = time.yyyy + time.mm + time.dd + time.hh + time.min + time.sec;
  const folders = ((dir) => {
    return fs.readdirSync(dir).filter((file) => {
      return fs.statSync(path.join(dir, file)).isDirectory();
    });
  })(src);
  const generateSprite = (folder) => {
    const spriteData = gulp.src(src + folder + '/*.png')
      .pipe(g.spritesmith({
        imgName: 'bundle-' + stamp + folder + '.png',
        cssName: folder + '.styl',
        cssTemplate: src + folder + '.handlebars',
        cssVarMap: (sprite) => {
          sprite.name = sprite.name.replace(/@/, '-at');
        }
      }));
    const cssStream = spriteData.css
      .pipe(gulp.dest(src));
    const imgStream = spriteData.img
      .pipe(g.imagemin())
      .pipe(gulp.dest('./html_elements/'));
    return;
  };
  for (let i=0; i<folders.length; i++) {
    generateSprite(folders[i]);
  }
  done();
});

gulp.task('jade', () => {
  return gulp.src([
      './**/*.jade',
      '!./**/_*.jade',
      '!./html_elements/lib/**/*.jade',
      '!./{bower_components,node_modules}/**/*.jade'
    ], {base: './'})
    .pipe(g.plumber(config.plumber))
    .pipe(g.data(config.data))
    .pipe(g.jade(config.jade))
    .pipe(gulp.dest('.'));
});

gulp.task('watch-jade', () => {
  g.watch([
      './**/*.jade',
      '!./**/_*.jade',
      '!./html_elements/lib/**/*.jade',
      '!./{bower_components,node_modules}/**/*.jade'
    ], {base: './'})
    .pipe(g.plumber(config.plumber))
    .pipe(g.data(config.data))
    .pipe(g.jade(config.jade))
    .pipe(gulp.dest('.'))
    .pipe(browserSync.reload(config.reload));
  g.watch([
      './html_elements/lib/**/*.jade',
      './**/_*.jade',
      '!./{bower_components,node_modules}/**/_*.jade'
    ], () => {
      gulp.src([
          './**/*.jade',
          '!./**/_*.jade',
          '!./html_elements/lib/**/*.jade',
          '!./{bower_components,node_modules}/**/*.jade'
        ], {base: './'})
        .pipe(g.plumber(config.plumber))
        .pipe(g.data(config.data))
        .pipe(g.jade(config.jade))
        .pipe(gulp.dest('.'))
        .on('end', browserSync.reload);
    });
});

gulp.task('coffee', () => {
  return gulp.src([
      './**/*.coffee',
      '!./{bower_components,node_modules}/**/*.coffee'
    ], {base: './'})
    .pipe(g.plumber(config.plumber))
    .pipe(g.coffee(config.coffee))
    .pipe(g.jshint())
    .pipe(g.jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest('.'));
});

gulp.task('watch-coffee', () => {
  g.watch([
      './**/*.coffee',
      '!./{bower_components,node_modules}/**/*.coffee'
    ], {base: './'})
    .pipe(g.plumber(config.plumber))
    .pipe(g.coffee(config.coffee))
    .pipe(g.jshint())
    .pipe(g.jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest('.'));
});

const bundler = () => browserify(config.browserify);
const watcher = watchify(bundler());
const bundle = (pkg) => {
  return pkg.bundle()
    .on('error', g.util.log.bind(g.util, 'Browserify Error'))
    .pipe(vinylStream('bundle.js'))
    .pipe(vinylBuffer())
    .pipe(g.uglify(config.uglify))
    .pipe(gulp.dest('./html_elements/'));
};

gulp.task('browserify', bundle.bind(null, bundler()));

gulp.task('build', ['stylus', 'jade', 'coffee'], () => {
    gulp.start('browserify');
});

gulp.task('watch', ['watch-stylus', 'watch-jade', 'watch-coffee'], () => {
  watcher.on('log', g.util.log);
  watcher.on('update', bundle.bind(null, watcher));
  browserSync.init(config.browserSync);
});

gulp.task('serve', ['build'], () => {
    gulp.start('watch');
});

gulp.task('default', ['bower'], () => {
    gulp.start('serve');
});
