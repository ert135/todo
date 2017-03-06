module Sonovate.MainPage {
    
    class MainPage {

        static $inject = ["$stateProvider"];

        constructor(private $stateProvider: ng.ui.IStateProvider) {

            this.$stateProvider
            .state("/", {
                url: "/",
                templateUrl: "mainPage/mainPage.html",
                controller: "mainPageController as vm",
            });
        }
    }

    angular.module("sonovate.mainPage").config(MainPage);
}