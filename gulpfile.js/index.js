/* ========================================================================== *
 * gulpfile.js
 *
 * @name: muscle
 * @summary: Muscle Build System
 *
 * @example:
 * // Development: Make Magical Things && Watch
 * $ gulp
 * // or
 * $ gulp --env=dev
 *
 * // Production: Clean Up && Compress
 * $ gulp --env=prod
 *
 * // Test: Unit Test this Mess
 * $ gulp --env=test
 *
 * @license: MIT (https://github.com/frankymartz/muscle/blob/master/LICENSE)
 * @copyright: 2016 FrankyMartz, All Rights Reserved.
 * ========================================================================== */

/* Import =================================================================== */

const gulp = require('gulp');
const runSequence = require('run-sequence').use(gulp);
const requireDir = require('require-dir');
const argv = require('yargs').argv;

/* Global =================================================================== */

global.env = argv.env || 'dev';


/* Environment ============================================================== */

const ENV = global.env;

// Create All Environment Variable Here!
// process.env.<variable> = 'foobar';
/*
switch (ENV) {
  case 'prod':
    break;

  case 'stage':
    break;

  default:
}
 */



/* GulpJS =================================================================== */

// GulpJS: All Task-------------------------------------------------------------

requireDir('./task', {recurse: true});


// GulpJS: Default -------------------------------------------------------------

gulp.task('default', (cb) => {
  switch (ENV) {
    case 'prod':
      runSequence(
        'clean',
        'style',
        'test',
        cb
      );
      break;

    case 'test':
      runSequence(
        'test',
        cb
      );
      break;

    default:
      runSequence(
        'clean',
        'test',
        'style',
        'watch',
        cb
      );
  }
});

