(function () {

    'use strict';

    angular
        .module('application.utility')
        .controller('loginViewController', [
            '$state',
            'authenticationService',
            'authenticationContextService',
            LoginViewController
        ]);

    function LoginViewController($state,
                                 authenticationService,
                                 authenticationContextService) {

        var self = this;

        self.$onInit = function () {
            var authentication = authenticationContextService.getAuthentication();
            if (authentication) {
                handleSuccessfulAuthentication();
            }
        };

        self.authenticate = function () {

            self.error = null;

            // TODO: check login and secret inputs

            authenticationService

                .authenticate({
                    login: self.login,
                    secret: self.secret
                })

                .then(function (response) {
                    console.log("INFO: handle success");
                    handleSuccessfulAuthentication();
                })

                .catch(function (response) {
                    console.log("ERROR: handle failure");
                    handleFailedAuthentication();
                });
        };

        function handleSuccessfulAuthentication() {
            $state.go('root');
        }

        function handleFailedAuthentication() {
            self.error = "Ошибка при попытке входа";
        }
    }
})();
