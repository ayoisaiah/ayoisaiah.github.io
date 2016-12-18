const gulp = require('gulp');

// const concat = require('gulp-concat');
// const rename = require('gulp-rename');
// const uglify = require('gulp-uglify');

// const jsfiles = 'assets/vendor/mdl/scripts/**/*.js';

const child = require('child_process');
const gutil = require('gulp-util');

const browserSync = require('browser-sync').create();

const siteRoot = '_site';

// gulp.task('scripts', function () {
//   return gulp.src(jsfiles)
//   .pipe(concat('index.js'))
//   .pipe(gulp.dest('assets/js'))
//   .pipe(rename('index.min.js'))
//   .pipe(uglify())
//   .pipe(gulp.dest('assets/js'))
// });

gulp.task('jekyll', function () {
  const jekyll = child.spawn('jekyll', ['build', '--watch', 'incremental', '--drafts']);

  const jekyllLogger = function (buffer) {
    buffer.toString()
    .split(/\n/)
    .forEach(function (message) {
      gutil.log('Jekyll: ' + message);
    });
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('serve', function () {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 3000,
    server: {
      baseDir: siteRoot
    }
  });
  // gulp.watch(jsfiles, ['scripts']);
});

gulp.task('default', ['jekyll', 'serve']);
