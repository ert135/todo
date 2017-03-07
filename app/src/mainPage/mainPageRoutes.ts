///<reference path="../sonovate.d.ts"/>
module MainPage {
    
    class MainPageRoutes {

        static $inject = ["$stateProvider"];

        constructor(private $stateProvider: ng.ui.IStateProvider) {

            this.$stateProvider
            .state("MainPage", {
                url: "/home",
                templateUrl: "mainPage/mainPage.html",
                controller: "MainPageController as vm",
            });
        }
    }

    angular.module("main-page").config(MainPageRoutes);
}