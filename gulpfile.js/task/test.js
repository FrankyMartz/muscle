/* ========================================================================== *
 * test.js
 *
 * @summary: Test Style Gulp Task
 *
 * @license: MIT (https://github.com/frankymartz/muscle/blob/master/LICENSE)
 * @copyright: 2016 FrankyMartz, All Rights Reserved.
 * ========================================================================== */

// Import ======================================================================

const path = require('path');

// Import: GulpJS --------------------------------------------------------------
//
const gulp = require('gulp');
const gUtil = require('gulp-util');

// Import: Task ----------------------------------------------------------------

const sassLint = require('gulp-sass-lint');

// Import: Helper --------------------------------------------------------------

const noop = gUtil.noop;


// Environment =================================================================

const IS_DEV = Boolean(global.env === 'dev');
const CONFIG = require('../config.json');

const SRC = path.join(CONFIG.root.src, `*.{${CONFIG.css.extension}}`);


// GulpJS ======================================================================

gulp.task('test', () => {
  return gulp.src(SRC)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(IS_DEV ? noop() : sassLint.failOnError());
});

