/// <reference path="./sonovate.d.ts"/>
var Sonovate;
(function (Sonovate) {
    var Application = (function () {
        function Application($locationProvider, $httpProvider, $stateProvider, $urlMatcherFactoryProvider, $sceDelegateProvider) {
            this.$locationProvider = $locationProvider;
            this.$httpProvider = $httpProvider;
            this.$stateProvider = $stateProvider;
            this.$urlMatcherFactoryProvider = $urlMatcherFactoryProvider;
            this.$sceDelegateProvider = $sceDelegateProvider;
            this.$locationProvider.html5Mode(true);
            this.$urlMatcherFactoryProvider.caseInsensitive(true);
            this.$stateProvider
                .state("sonovate", {
                url: "?signupToken&mode",
                abstract: true,
                template: "<ui-view/>"
            });
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
var Sonovate;
(function (Sonovate) {
    var Core;
    (function (Core) {
        angular.module("sonovate.core", []);
    })(Core = Sonovate.Core || (Sonovate.Core = {}));
})(Sonovate || (Sonovate = {}));
/// <reference path="core\CoreModule.ts"/>
var Sonovate;
(function (Sonovate) {
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
})(Sonovate || (Sonovate = {}));
/// <reference path="./sonovate.d.ts"/>
angular.module("sonovate");
var Sonovate;
(function (Sonovate) {
    var Invoices;
    (function (Invoices) {
        var MainPageController = (function () {
            function MainPageController($scope, $state) {
                this.$scope = $scope;
                this.$state = $state;
            }
            return MainPageController;
        }());
        MainPageController.$inject = [
            "$scope",
            "$state"
        ];
        angular.module("sonovate.mainPage")
            .controller("mainPageController", MainPageController);
    })(Invoices = Sonovate.Invoices || (Sonovate.Invoices = {}));
})(Sonovate || (Sonovate = {}));
var Sonovate;
(function (Sonovate) {
    var MainPage;
    (function (MainPage) {
        angular.module("sonovate.mainPage", []);
    })(MainPage = Sonovate.MainPage || (Sonovate.MainPage = {}));
})(Sonovate || (Sonovate = {}));
var Sonovate;
(function (Sonovate) {
    var MainPage;
    (function (MainPage_1) {
        var MainPage = (function () {
            function MainPage($stateProvider) {
                this.$stateProvider = $stateProvider;
                this.$stateProvider
                    .state("/", {
                    url: "/",
                    templateUrl: "mainPage/mainPage.html",
                    controller: "mainPageController as vm",
                });
            }
            return MainPage;
        }());
        MainPage.$inject = ["$stateProvider"];
        angular.module("sonovate.mainPage").config(MainPage);
    })(MainPage = Sonovate.MainPage || (Sonovate.MainPage = {}));
})(Sonovate || (Sonovate = {}));

//# sourceMappingURL=main.js.map
