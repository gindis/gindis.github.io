/**
 * @author  gindis.wx
 */

'use strict';

var fs = require('fs');
var del = require('del');
var gulp = require('gulp');
var copy = require('gulp-copy');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var XTemplate = require('xtemplate');
var gulpXTemplate = require('gulp-xtemplate');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var compass = require('gulp-compass');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var transport = require("gulp-seajs-transport");
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish')
var pack = require('./package.json');
var pkg = pack.name;

// PATHS
var paths = {
  dest: 'build/',
  src: 'src',
  scripts: ['src/**/*.js', '!src/**/*-min.js', '!src/vendor/**/*.js'],
  sassRoot: ['src/**/*.scss', '!src/**/_*.scss'],
  cssRoot: ['src/**/*.css', '!src/**/_*.css'],
  images: ['src/*/images/*.*', '!src/*/images/_*.*', 'src/*/font/*'],
  xtpl: ['src/**/*.xtpl']
}

// CLEAN FILES
gulp.task('clean', function(cb) {
  return del(['build/'], cb);
});

// CONNECT
gulp.task('connect', function() {
  return connect.server({
    // root: './',
    livereload: true
  });
});

// XTPL
gulp.task('xtpl', function() {
  return gulp.src(paths.xtpl)
    .pipe(gulpXTemplate({
      XTemplate: XTemplate,
      wrap: 'commonjs',
      truncatePrefixLen: process.cwd().length,
      runtime: 'xtemplate/runtime'
    }))
    .pipe(transport())
    .pipe(uglify())
    .pipe(gulp.dest(paths.dest));
});

// KSM TASK
gulp.task('uglifyJs', ['xtpl'], function() {
  return gulp.src(paths.scripts)
    .pipe(transport())
    //.pipe(jshint('.jshintrc'))
    //.pipe(jshint.reporter(stylish))
    .pipe(uglify())
    .pipe(gulp.dest(paths.dest))
    .pipe(connect.reload());
});

// CSS
gulp.task('scss', function() {
  return gulp.src(paths.sassRoot)
    .pipe(compass({
      css: 'src',
      sass: 'src',
      image: 'src'
    }))
    .pipe(gulp.dest(paths.src))
    .pipe(connect.reload());
});

// Prefix CSS
gulp.task('prefix', ['scss'], function() {
  return gulp.src(paths.cssRoot)
    .pipe(prefix({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest(paths.dest))
    .pipe(connect.reload());
})

// COPY IMGAGES
gulp.task('images', function() {
  return gulp.src(paths.images)
    .pipe(copy(paths.dest, {
      prefix: 1
    }))
    .pipe(connect.reload());
});

// CONCAT
gulp.task('concat', function() {
  return gulp.src(['src/vendor/**/*.js'])
    .pipe(gulp.dest(paths.dest + '/vendor'))
    .pipe(uglify({
      'output': {
        'ascii_only': true
      }
    }))
    .pipe(gulp.dest(paths.dest + '/vendor'));
});

gulp.task('html', function() {
  gulp.src('./demo/*.html')
    .pipe(connect.reload());
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.sassRoot, ['prefix']);
  gulp.watch(paths.scripts, ['uglifyJs']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(['./demo/*.html'], ['html']);
})

// DEFAULT
gulp.task('default', ['watch', 'uglifyJs', 'prefix', 'images', 'concat']);

// SERVE
gulp.task('serve', ['connect', 'watch']);

// BUILD
gulp.task('build', ['uglifyJs', 'prefix', 'images', 'concat']);