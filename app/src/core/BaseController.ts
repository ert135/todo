/// <reference path="../sonovate.d.ts"/>

module Core {
    export class BaseController {
        
        protected subscriptions: Rx.IDisposable[];
        protected events: Function[];

        constructor(protected $scope: ng.IScope) {
            this.subscriptions = [];
            this.events = [];

            $scope.$on("$destroy", () => {

                this.subscriptions.forEach(sub => {
                    sub.dispose();
                });

                this.events.forEach(f => {
                    f();
                });
            });
        }
    }

}