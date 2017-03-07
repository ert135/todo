var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    sourcemaps  = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload'),
    gulpAngularTemplates = require('gulp-angular-templatecache');

var src = [
    'app/src/**/*.html',
    'app/**/*.html'
];

gulp.task('build:templates', function () {
    return gulp.src(src)
    .pipe(gulpAngularTemplates('templates.min.js', {
        standalone: true,
        root: ''
    }))
    .pipe(gulp.dest('app/build'))
    .pipe(livereload());
});

gulp.task('build:templates-for-test', function () {
    return gulp.src(src)
    .pipe(gulpAngularTemplates('templates.min.js', {
        standalone: true,
        root: ''
    }))
    .pipe(gulp.dest('app/test/build/app'))
    .pipe(livereload());
});

gulp.task(
    'watch:templates', 
    ['build:templates'], 
    function () {
        livereload.listen();
        gulp.watch(src, ['build:templates']);
    }
);