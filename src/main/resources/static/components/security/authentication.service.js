(function () {

    'use strict';

    angular
        .module('application.security')
        .service('authenticationService', [
            '$http',
            'loggerService',
            'urlResolverService',
            'authenticationContextService',
            AuthenticationService
        ]);

    function AuthenticationService($http,
                                   loggerService,
                                   urlResolverService,
                                   authenticationContextService) {

        var self = this;

        var url = urlResolverService.resolveKernelServiceUrl('authentication');

        self.authenticate = function (credential) {

            return $http

                .post(url, credential)

                .then(function (response) {
                    loggerService.info('authentication attempt succeeded');
                    authenticationContextService.setAuthentication(response.data);
                })

                .catch(function (response) {
                    loggerService.warn('authentication attempt failed');
                    throw response;
                });
        };

        self.deauthenticate = function () {
            authenticationContextService.reset();
        };
    }
})();
