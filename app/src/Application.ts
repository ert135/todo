/// <reference path="sonovate.d.ts"/>
module Sonovate {
    'use strict';

    class Application {

        static $inject = [
            "$locationProvider", 
            "$httpProvider", 
            "$stateProvider", 
            "$urlMatcherFactoryProvider", 
            "$sceDelegateProvider"
        ];

        constructor(
        ) {
            console.log(this);
        }
    }

    angular.module("sonovate").config(Application);
}
