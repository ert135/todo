module Sonovate.Invoices {
    
    class MainPageController
    {
        static $inject = [ 
            "$scope",
            "$state"
        ];
  
        constructor(
            protected $scope: ng.IScope,
            protected $state: ng.ui.IStateService
        ) {
    
        }
    }

    angular.module("sonovate.mainPage")
    .controller("mainPageController", MainPageController);
}