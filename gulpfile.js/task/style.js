/* ========================================================================== *
 * style.js
 *
 * @summary: CSS Style Gulp Task
 *
 * @license: MIT (https://github.com/frankymartz/muscle/blob/master/LICENSE)
 * @copyright: 2016 FrankyMartz, All Rights Reserved.
 * ========================================================================== */

// Import ======================================================================

const path = require('path');

// Import: GulpJS --------------------------------------------------------------

const gulp = require('gulp');
const gUtil = require('gulp-util');
const gSize = require('gulp-size');
const gNotify = require('gulp-notify');
const gRename = require('gulp-rename');

// Import: Task ----------------------------------------------------------------

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const sourcemap = require('gulp-sourcemaps');

// Import: Helper --------------------------------------------------------------

const noop = gUtil.noop;


// Environment =================================================================

const IS_DEV = Boolean(global.env === 'dev');
const CONFIG = require('../config.json');

const SRC = path.join(CONFIG.root.src, `*.{${CONFIG.css.extension}}`);
const DEST = path.join(CONFIG.root.dest);


// GulpJS ======================================================================

gulp.task('style', () => {
  return gulp.src(SRC)
    .pipe(IS_DEV ? sourcemap.init() : noop())
    .pipe(sass(CONFIG.css.sass))
    .on('error', gNotify.onError({
      title: 'SASS Compile Error',
      message: '<%= error.message %>',
    }))
    .pipe(autoprefixer(CONFIG.css.autoprefixer))
    .pipe(IS_DEV ? sourcemap.write('.'): noop())
    .pipe(gulp.dest(DEST))
    .pipe(IS_DEV ? noop() : csso(CONFIG.css.csso))
    .pipe(IS_DEV ? noop() : gRename({
      suffix: '.min',
    }))
    .pipe(IS_DEV ? noop() : gulp.dest(DEST))
    .pipe(IS_DEV ? noop() : gSize({
      title: 'CSS',
    }));
});

