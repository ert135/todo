/// <reference path="core\CoreModule.ts"/>

module Sonovate {

    var modules = [
        "templates",
        "ui.router"
    ];

    // this array could be loaded dynamically in the future
    var sonovateModules = [
        'sonovate.mainPage',
        'sonovate.core'
    ];
    angular.module("sonovate", modules.concat(sonovateModules));
}