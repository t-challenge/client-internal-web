(function () {

    'use strict';

    angular
        .module('application.security')
        .service('authenticationService', [
            '$http',
            'loggerService',
            'urlResolverService',
            'homeStateContextService',
            'authenticationContextService',
            AuthenticationService
        ]);

    function AuthenticationService($http,
                                   loggerService,
                                   urlResolverService,
                                   homeStateContextService,
                                   authenticationContextService) {

        var self = this;

        var url = urlResolverService.resolveKernelServiceUrl('authentication');

        self.authenticate = function (credential) {

            return $http

                .post(url, credential)

                .then(function (response) {
                    var authentication = response.data;
                    loggerService.info('authentication attempt succeeded');
                    authenticationContextService.setAuthentication(authentication);
                    return authentication;
                })

                .catch(function (response) {
                    loggerService.warn('authentication attempt failed');
                    throw response;
                });
        };

        self.deauthenticate = function () {
            authenticationContextService.reset();
            homeStateContextService.reset();
        };
    }
})();
