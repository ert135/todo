///<reference path="../sonovate.d.ts"/>
module Weather {
    
    class WeatherRoutes {

        static $inject = ["$stateProvider"];

        constructor(private $stateProvider: ng.ui.IStateProvider) {

            this.$stateProvider
            .state("weatherMainPage", {
                url: "/weather",
                templateUrl: "weather/weather.html",
                controller: "weatherController as vm",
            });
        }
    }

    angular.module("weather").config(WeatherRoutes);
}