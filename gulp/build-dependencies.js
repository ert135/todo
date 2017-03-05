var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    sourcemaps  = require('gulp-sourcemaps'),
    uglify      = require('gulp-uglify');

var src = [
    'node_modules/angular/angular.js',
    'node_modules/angular-ui-router/release/angular-ui-router.js',
    'node_modules/rxjs/dist/rx.all.js',
    'node_modules/angular-rx/dist/rx.angular.js',
    'node_modules/angular-cookies/angular-cookies.js'
];

gulp.task('build:dependencies', function(){
    return gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(concat('dependencies.min.js'))
        .pipe(sourcemaps.write("/sourceMaps"))
        .pipe(gulp.dest('app/build'));
});

gulp.task('watch:dependencies', function () {
    gulp.watch(src, ['build:js']);
});
