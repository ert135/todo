///<reference path="../sonovate.d.ts"/>
module MainPage {
    
    class MainPageController extends Core.BaseController {
        
        static $inject = [
            "$scope",
            "$rootScope",
        ];

        constructor(
            protected $scope: ng.IScope,
            protected $rootScope: ng.IRootScopeService,
        ) {
            super($scope);
        }
    
    }

    angular.module("main-page").controller("MainPageController", MainPageController);
}