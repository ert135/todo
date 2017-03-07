/// <reference path="sonovate.d.ts"/>

'use strict';
module Sonovate {
    angular.module("sonovate", [
        "templates",
        "ui.router",
        "core",
        'main-page',
        "weather"
    ]);

    //go to home view by default
    angular.module("sonovate").config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
    })
}
