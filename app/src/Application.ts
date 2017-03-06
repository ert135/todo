/// <reference path="./sonovate.d.ts"/>
module Sonovate {

    class Application {

        static $inject = [
            "$locationProvider", 
            "$httpProvider", 
            "$stateProvider", 
            "$urlMatcherFactoryProvider", 
            "$sceDelegateProvider"
        ];

        constructor(
            private $locationProvider: ng.ILocationProvider,
            private $httpProvider: ng.IHttpProvider,
            private $stateProvider: ng.ui.IStateProvider,
            private $urlMatcherFactoryProvider: ng.ui.IUrlMatcherFactory,
            private $sceDelegateProvider: ng.ISCEDelegateProvider
        ) {
            this.$locationProvider.html5Mode(true);
            this.$urlMatcherFactoryProvider.caseInsensitive(true);
            this.$stateProvider
                .state("sonovate", {
                    url: "?signupToken&mode",
                    abstract: true,
                    template: "<ui-view/>"
                });
        }
    }

    angular.module("sonovate").config(Application);
}
