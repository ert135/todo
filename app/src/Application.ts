/// <reference path="sonovate.d.ts"/>
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
            window['ObjectAssign'].polyfill();
            this.$locationProvider.html5Mode(true);
            this.$httpProvider.interceptors.push("httpInterceptorService");
            this.$urlMatcherFactoryProvider.caseInsensitive(true);
            this.$stateProvider
                .state("sonovate", {
                    url: "?signupToken&mode",
                    abstract: true,
                    template: "<ui-view/>",
                    resolve: {
                        apiKey: resolveApiKey()
                    }
                });
            this.$stateProvider
                .state("otherwise", {
                    url: "*path",
                    templateUrl: "errorRedirects/404.html",
                    controller: "errorRedirectController as vm",
                    resolve: {
                        apiKey: resolveApiKey()
                    }
                });
            this.$sceDelegateProvider.resourceUrlWhitelist([
                'self',
                'https://*.sonovate.com/**'
            ]);
            function resolveApiKey(): any {
                return  [
                    "apiKeyActions",
                    "$q",
                    "$location",
                    "SingleResourceTokenEvents",
                    (apiKeyActions: IApiKeyActions, $q: ng.IQService, $location: ng.ILocationService, SingleResourceTokenEvents: Core.Events.ISingleResourceTokenEvents): Rx.Promise<string> => {

                        let sub = apiKeyActions.getApiKey();

                        return apiKeyActions.subjects.getApiKeySuccess
                            .take(1)
                            .toPromise($q)
                            .then((apiKey): string => {
                                sub.dispose();
                                return apiKey;
                            });
                    }
                ]
            }
        }
    }

    angular.module("test").config(Application);
    
}

