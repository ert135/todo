var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    sourcemaps  = require('gulp-sourcemaps'),
    cache       = require('gulp-cached'),
    remember    = require('gulp-remember'),
    uglify      = require('gulp-uglify'),
    ngAnnotate  = require('gulp-ng-annotate'),
    uglify      = require('gulp-uglify'),
    jshint      = require('gulp-jshint'),
    stylish     = require('jshint-stylish'),
    notify      = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    plumber     = require('gulp-plumber'),
    yargs       = require('yargs').argv,
    gulpif      = require('gulp-if'),
    stripDebug = require('gulp-strip-debug');

var src = [
    'app/src/**/*.js'
];


gulp.task('build:js', function(){
    return gulp.src(src)
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError(
                    "JS ERROR:\n" + err.message
                )(err);
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(cache('build:js'))
        .pipe(jshint("gulp/config/.jshintrc"))
        .pipe(jshint.reporter(stylish))
        .pipe(uglify({mangle: false}))
        .pipe(remember('build:js'))
        .pipe(concat('js.min.js'))
        .pipe(gulpif(yargs.clean, stripDebug()))
        .pipe(sourcemaps.write('/sourceMaps'))
        .pipe(gulp.dest('app/build'))
        .pipe(livereload());
});

gulp.task('watch:js', ['build:js'], function () {
    var watcher = gulp.watch(src, ['build:js']);

    watcher.on('change', function (event) {
        if (event.type === 'deleted') { // if a file is deleted, forget about it 
          delete cache.caches['build:js'][event.path];
          remember.forget('build:js', event.path);
        }
    });

    livereload.listen();
});
