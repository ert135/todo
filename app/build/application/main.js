var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="../../typings/index.d.ts"/>
var Sonovate;
(function (Sonovate) {
    var Models;
    (function (Models) {
        ;
    })(Models = Sonovate.Models || (Sonovate.Models = {}));
})(Sonovate || (Sonovate = {}));
/// <reference path="sonovate.d.ts"/>
'use strict';
var Sonovate;
(function (Sonovate) {
    angular.module("sonovate", [
        "templates",
        "ui.router",
        "core",
        'main-page',
        "weather"
    ]);
    //go to home view by default
    angular.module("sonovate").config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    });
})(Sonovate || (Sonovate = {}));
/// <reference path="../sonovate.d.ts"/>
var Core;
(function (Core) {
    var BaseController = (function () {
        function BaseController($scope) {
            var _this = this;
            this.$scope = $scope;
            this.subscriptions = [];
            this.events = [];
            $scope.$on("$destroy", function () {
                _this.subscriptions.forEach(function (sub) {
                    sub.dispose();
                });
                _this.events.forEach(function (f) {
                    f();
                });
            });
        }
        return BaseController;
    }());
    Core.BaseController = BaseController;
})(Core || (Core = {}));
var MainPage;
(function (MainPage) {
    angular.module("main-page", []);
})(MainPage || (MainPage = {}));
///<reference path="../sonovate.d.ts"/>
var MainPage;
(function (MainPage) {
    var MainPageController = (function (_super) {
        __extends(MainPageController, _super);
        function MainPageController($scope, $rootScope) {
            var _this = _super.call(this, $scope) || this;
            _this.$scope = $scope;
            _this.$rootScope = $rootScope;
            return _this;
        }
        return MainPageController;
    }(Core.BaseController));
    MainPageController.$inject = [
        "$scope",
        "$rootScope",
    ];
    angular.module("main-page").controller("MainPageController", MainPageController);
})(MainPage || (MainPage = {}));
var Weather;
(function (Weather) {
    angular.module("weather", []);
})(Weather || (Weather = {}));
/// <reference path="sonovate.d.ts"/>
var Sonovate;
(function (Sonovate) {
    'use strict';
    var Application = (function () {
        function Application() {
            console.log(this);
        }
        return Application;
    }());
    Application.$inject = [
        "$locationProvider",
        "$httpProvider",
        "$stateProvider",
        "$urlMatcherFactoryProvider",
        "$sceDelegateProvider"
    ];
    angular.module("sonovate").config(Application);
})(Sonovate || (Sonovate = {}));
var Core;
(function (Core) {
    angular.module("core", []);
})(Core || (Core = {}));
///<reference path="../sonovate.d.ts"/>
var Weather;
(function (Weather) {
    var WeatherController = (function (_super) {
        __extends(WeatherController, _super);
        function WeatherController($scope, $rootScope) {
            var _this = _super.call(this, $scope) || this;
            _this.$scope = $scope;
            _this.$rootScope = $rootScope;
            return _this;
        }
        return WeatherController;
    }(Core.BaseController));
    WeatherController.$inject = [
        "$scope",
        "$rootScope",
    ];
    angular.module("weather").controller("weatherController", WeatherController);
})(Weather || (Weather = {}));
///<reference path="../sonovate.d.ts"/>
var Weather;
(function (Weather) {
    var WeatherRoutes = (function () {
        function WeatherRoutes($stateProvider) {
            this.$stateProvider = $stateProvider;
            this.$stateProvider
                .state("weatherMainPage", {
                url: "/weather",
                templateUrl: "weather/weather.html",
                controller: "weatherController as vm",
            });
        }
        return WeatherRoutes;
    }());
    WeatherRoutes.$inject = ["$stateProvider"];
    angular.module("weather").config(WeatherRoutes);
})(Weather || (Weather = {}));
///<reference path="../sonovate.d.ts"/>
var MainPage;
(function (MainPage) {
    var MainPageRoutes = (function () {
        function MainPageRoutes($stateProvider) {
            this.$stateProvider = $stateProvider;
            this.$stateProvider
                .state("MainPage", {
                url: "/home",
                templateUrl: "mainPage/mainPage.html",
                controller: "MainPageController as vm",
            });
        }
        return MainPageRoutes;
    }());
    MainPageRoutes.$inject = ["$stateProvider"];
    angular.module("main-page").config(MainPageRoutes);
})(MainPage || (MainPage = {}));
/// <reference path="../../../sonovate.d.ts" />
var Core;
(function (Core) {
    var snMenuController = (function (_super) {
        __extends(snMenuController, _super);
        function snMenuController($scope, $timeout, $state) {
            var _this = _super.call(this, $scope) || this;
            _this.$scope = $scope;
            _this.$timeout = $timeout;
            _this.$state = $state;
            return _this;
        }
        snMenuController.prototype.goToWeatherPage = function () {
            console.log("Going!!");
            this.$state.go("weatherMainPage");
        };
        return snMenuController;
    }(Core.BaseController));
    snMenuController.$inject = [
        "$scope",
        "$timeout",
        "$state"
    ];
    angular.module("core")
        .directive("snMenu", function snMenu() {
        return {
            restrict: "E",
            controller: snMenuController,
            controllerAs: "vm",
            transclude: true,
            replace: false,
            bindToController: true,
            templateUrl: 'core/components/menuComponent/headerComponentTemplate.html',
            scope: {}
        };
    });
})(Core || (Core = {}));

//# sourceMappingURL=main.js.map
