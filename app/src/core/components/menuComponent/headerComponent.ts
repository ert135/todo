/// <reference path="../../../sonovate.d.ts" />

module Core {

    class snMenuController extends Core.BaseController {

        static $inject = [
            "$scope", 
            "$timeout",
            "$state"
        ];


        constructor(
            protected $scope: ng.IScope,
            private $timeout: ng.ITimeoutService,
            private $state: ng.ui.IStateService
        ) {
            super($scope);
        }

        public goToWeatherPage(): void {
            console.log("Going!!");
            this.$state.go("weatherMainPage")
        }

 
    }

    angular.module("core")
    .directive(
        "snMenu",
        function snMenu(): ng.IDirective {
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
        }
    );
}
