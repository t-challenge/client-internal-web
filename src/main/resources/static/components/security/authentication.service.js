(function () {

    'use strict';

    angular
        .module('application.security')
        .service('authenticationService', [
            '$http',
            'authenticationContextService',
            AuthenticationService
        ]);

    function AuthenticationService($http,
                                   authenticationContextService) {

        var self = this;

        self.authenticate = function (credential) {

            // TODO: replace sandbox URL
            return $http

                .post('/sandbox/authentication', credential)

                .then(function (response) {
                    console.log("INFO: authentication attempt succeeded");
                    authenticationContextService.setAuthentication(response.data);
                })

                .catch(function (response) {
                    console.log("ERROR: authentication attempt failed");
                });
        };

        self.deauthenticate = function () {
            authenticationContextService.reset();
        };
    }
})();
