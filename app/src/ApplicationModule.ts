/// <reference path="core/CoreModule.ts"/>

module Sonovate {

    var modules = [
        "templates",
        "ui.router",
        "ngCookies",
        'rx', 
    ];

    // this array could be loaded dynamically in the future
    var testModules = [

    ];

    angular.module("test", modules.concat(testModules));
}