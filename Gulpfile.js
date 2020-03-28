'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

const baseDir = 'src';
const outputDir = 'dir';

function formatStyles() {
  return gulp.src(`${baseDir}/styles/*.scss`)
    .pipe(concat('styles.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(`${outputDir}/styles`));
}

function copyScripts() {
  return gulp.src(`${baseDir}/scripts/*.js`)
  .pipe(gulp.dest(`${outputDir}/scripts`));
}

function copyResources() {
  return gulp.src(`${baseDir}/resources/**/*`)
  .pipe(gulp.dest(`${outputDir}/resources`));
}

function copyViews() {
  return gulp.src(`${baseDir}/views/*.html`)
  .pipe(gulp.dest(`${outputDir}/views`));
}

function watch() {
  gulp.watch(`${baseDir}/styles/*.scss`, formatStyles);
  gulp.watch(`${baseDir}/scripts/*.js`, copyScripts);
  gulp.watch(`${baseDir}/resources/**/*`, copyResources);
  gulp.watch(`${baseDir}/views/*.html`, copyViews);
  return;
}

exports.build = gulp.parallel(formatStyles, copyResources, copyScripts, copyViews);
exports.formatStyles = formatStyles;
exports.watch = watch;
exports.buildAndWatch = gulp.series(this.build, watch);
exports.dev = this.buildAndWatch;
exports.default = this.build;
