/* ========================================================================== *
 * watch.js
 *
 * @summary: Watch Gulp Task
 *
 * @license: MIT (https://github.com/frankymartz/muscle/blob/master/LICENSE)
 * @copyright: 2016 FrankyMartz, All Rights Reserved.
 * ========================================================================== */

/* Module =================================================================== */

const path = require('path');
const gulp = require('gulp');
const runSequence = require('run-sequence').use(gulp);
const gWatch = require('gulp-watch');
const gBatch = require('gulp-batch');


/* Environment ============================================================== */

const CONFIG = require('../config.json');
const SRC = path.join(CONFIG.root.src, `**/*.{${CONFIG.css.extension}}`);


/* GulpJS =================================================================== */

gulp.task('watch', () => {
  gWatch(
    SRC,
    gBatch((allEvent, cb) => {
      runSequence('test', 'style', cb);
    })
  );
});

