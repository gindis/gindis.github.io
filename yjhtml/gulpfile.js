'use strict';

var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var es = require('event-stream');
var connect = require('gulp-connect');
var transport = require("gulp-seajs-transport");

var paths = {
  build: 'build',
  produce: 'client',
  cmdjs: ['client/**/*.js', '!client/vendor/**/*.js'],
  scripts: ['client/**/*.js', '!client/vendor/**/*.js'],
  coffeeScript: ['client/*.coffee', 'client/**/*.coffee'],
  images: ['client/img/**/*'],
  sassRoot: ['client/**/*.scss', 'client/**/i*.scss', 'client/**/_*.scss'],
  cssRoot: ['client/*.css', 'client/**/*.css'],
  srcFile: ['client/vendor/**/*'],
  srcSvg: ['client/svg/*']
};

gulp.task('clean', function() {
  return del([paths.build], function(err) {
    console.log('Files deleted');
  });
});

gulp.task('connect', function() {
  return connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('sass-to-css', function() {
  return gulp.src(paths.sassRoot)
  //return gulp.src('client/**/i*.scss')
    .pipe(sass())
    .pipe(gulp.dest(paths.produce));
});

gulp.task('prefix', ['sass-to-css'], function() {
  return gulp.src(paths.cssRoot)
    .pipe(prefix("last 3 versions"))
    .pipe(gulp.dest(paths.produce))
});

gulp.task('minify-css', ['prefix'], function() {
  return gulp.src(paths.cssRoot)
    .pipe(minify())
    .pipe(gulp.dest(paths.build))
    .pipe(connect.reload());
});

gulp.task('coffee-to-js', function() {
  return gulp.src(paths.coffeeScript)
    .pipe(coffee())
    .pipe(gulp.dest(paths.produce));
});

gulp.task('scripts', ['coffee-to-js'], function() {
  return gulp.src(paths.scripts)
    .pipe(transport({
      base: 'client'
    }))
    .pipe(uglify())
    .pipe(gulp.dest(paths.build))
    .pipe(connect.reload());
});

gulp.task('svg', function() {
  return gulp.src(paths.srcSvg)
    .pipe(gulp.dest(paths.build + '/svg'));
});

// Copy all static images
gulp.task('images', function() {
  return gulp.src(paths.images)
    .pipe(imagemin({
      optimizationLevel: 5
    }))
    .pipe(gulp.dest(paths.build + '/img'))
    .pipe(connect.reload());
});

gulp.task('file', ['scripts', 'images'], function() {
  return gulp.src(paths.srcFile)
    .pipe(gulp.dest(paths.build + '/vendor'));
});

gulp.task('html', function() {
  return gulp.src('./examples/*.html')
    .pipe(connect.reload());
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.sassRoot, ['minify-css']);
  gulp.watch(['./examples/*.html'], ['html']);
});

// The server task
gulp.task('serve', ['connect', 'watch']);

// The dev task (called when you run `gulp` from cli)
gulp.task('dev', ['watch', 'prefix', 'coffee-to-js']);

// The build task for production
gulp.task('build', ['clean', 'minify-css', 'scripts', 'file', 'xtpl'], function(){
  gulp.start(['svg','invitejs', 'xtpl', 'minify-css']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['clean', 'minify-css', 'scripts', 'watch']);


var gulpXTemplate = require('gulp-xtemplate');
var xtemplate = require('xtemplate');
gulp.task('xtpl', function() {
  return gulp.src('client/**/*.xtpl')
    .pipe(gulpXTemplate({
      XTemplate: xtemplate,
      wrap: 'commonjs',
      truncatePrefixLen: process.cwd().length,
      runtime: 'xtemplate/runtime'
    }))
    .pipe(transport())
    .pipe(uglify())
    .pipe(gulp.dest('build'))
});
gulp.task('n', function() {
  gulp.start(['invitejs', 'xtpl', 'minify-css'])
});
gulp.task('invitejs', function() {
  return gulp.src('client/invite/*.js')
    .pipe(transport({
      base: 'client'
    }))
    .pipe(uglify())
    .pipe(gulp.dest(paths.build + '/invite'))
});
gulp.task('w', function() {
  gulp.watch(paths.sassRoot, ['minify-css']);
  gulp.watch('client/invite/*.js', ['invitejs']);
  gulp.watch('client/**/*.xtpl', ['xtpl']);
})
gulp.task('s', ['connect', 'w'])
