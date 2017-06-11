(function () {

    'use strict';

    angular
        .module('application.security')
        .service('authenticationService', [
            '$http',
            'urlResolverService',
            'authenticationContextService',
            AuthenticationService
        ]);

    function AuthenticationService($http,
                                   urlResolverService,
                                   authenticationContextService) {

        var self = this;

        var url = urlResolverService.resolveKernelServiceUrl('authentication');

        self.authenticate = function (credential) {

            return $http

                .post(url, credential)

                .then(function (response) {
                    console.log("INFO: authentication attempt succeeded");
                    authenticationContextService.setAuthentication(response.data);
                })

                .catch(function (response) {
                    console.log("ERROR: authentication attempt failed");
                    throw response;
                });
        };

        self.deauthenticate = function () {
            authenticationContextService.reset();
        };
    }
})();
