"use strict";

var requireDir  = require("require-dir"),
    gulp        = require("gulp"),
    tasks       = requireDir("gulp");


gulp.task("build", [
    "build:css",
    "build:dependencies",
    "build:js",
    "build:ts",
    "build:templates"
]);

gulp.task("watch", [
    "watch:dependencies",
    "watch:js",
    "watch:ts",
    "watch:css",
    "watch:templates"
]);

// Do not remove Debug or Release tasks. Ever. Stop it. Now.
// Required for build and deployment environments.
gulp.task("Debug", ["build"]);
gulp.task("Release", ["build"/*, 'test'*/]);

gulp.task("default", ["Debug"]);
