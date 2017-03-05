(function() {
    "use strict";

    var gulp        = require("gulp"),
        sourcemaps = require("gulp-sourcemaps"),
        livereload  = require("gulp-livereload"),
        notify      = require("gulp-notify"),
        plumber     = require("gulp-plumber"),
        ts          = require("gulp-typescript"),
        gulpif      = require('gulp-if'),
        stripDebug = require('gulp-strip-debug');

    gulp.task("build:ts", function () {
        return gulp.src([
                "app/src/sonovate.models.ts",
                "app/src/**/*BaseClass.ts",
                "app/src/**/*.ts"
            ])
            .pipe(buildPlumber())
            .pipe(sourcemaps.init())
            .pipe(ts({
                noImplicitAny: false,
                noEmitOnError: true,
                target: "ES5",
                out: "main.js"
            }))
            .pipe(sourcemaps.write("/"))
            .pipe(gulp.dest("app/build"))
            .pipe(livereload());
    });

    function buildPlumber() { 
        return plumber({
            errorHandler: function(err) {
                this.emit("end");
            }
        });
    }

    gulp.task('watch:ts', ['build:ts'], function () {
        var watcher = gulp.watch("app/**/*.ts", ['build:ts']);
        livereload.listen();
    });

}());