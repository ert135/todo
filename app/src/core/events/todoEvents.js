angular.module("myApp")
.service("ChangePasswordEvents", function() {
        this.userIntents = {

        }
       this.httpResults= {
            passwordChangeRequestSuccess: new Rx.Subject(),
            passwordChangeRequestFailure: new Rx.Subject()
        }
});