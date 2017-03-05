var gulp, gulpif, less, rename, minify, prefix, plumber, notify, sourcemaps;

gulp = require('gulp');
gulpif = require('gulp-if');
less = require('gulp-less');
rename = require('gulp-rename');
minify = require('gulp-minify-css');
prefix = require('gulp-autoprefixer');
plumber = require('gulp-plumber');
notify = require('gulp-notify');
sourcemaps = require('gulp-sourcemaps');
livereload = require('gulp-livereload');

gulp.task('build:css', function () {

    var task = gulp.src("app/less/base.less")
        .pipe(sourcemaps.init())
        .pipe(plumber({
          errorHandler: function (err) {
            notify.onError(
              "LESS ERROR:\n" + err.message
            )(err);
            this.emit('end');
          }
        }))
        .pipe(less({ plugins: [require('less-plugin-glob')] }))
        .pipe(rename('site.min.css'))
        .pipe(prefix())
        .pipe(sourcemaps.write('/sourceMaps'))
        .pipe(gulp.dest('app/build'))
        .pipe(livereload());


        return task;
});

gulp.task('watch:css', ['build:css'], function () {
    gulp.watch('app/less/**/*', ['build:css']);
});