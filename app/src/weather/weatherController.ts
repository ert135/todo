///<reference path="../sonovate.d.ts"/>

module Weather {
    
    class WeatherController extends Core.BaseController {
        
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

    angular.module("weather").controller("weatherController", WeatherController);
}