/* ========================================================================== *
 * clean.js
 *
 * @summary: Clean Dest Gulp Task
 *
 * @license: MIT (https://github.com/frankymartz/muscle/blob/master/LICENSE)
 * @copyright: 2016 FrankyMartz, All Rights Reserved.
 * ========================================================================== */

// Import ======================================================================

const gulp = require('gulp');
const del = require('del');


// Environment =================================================================

const CONFIG = require('../config.json');


// GulpJS ======================================================================

gulp.task('clean', (cb) => {
  del(CONFIG.root.dest)
    .then(() => {
      cb();
    });
});

