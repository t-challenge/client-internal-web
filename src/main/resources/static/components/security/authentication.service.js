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
                    loggerService.info('authentication attempt succeeded');
                    authenticationContextService.setAuthentication(response.data);
                    homeStateContextService.setHomeState(homeState(response.data));
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

        function homeState(authentication) {
            var result = 'root.authorized.candidate.list';
            if (authentication
                && authentication.employee
                && authentication.employee.roles
                && authentication.employee.roles.indexOf('TASK_MODERATOR') > -1) {
                result = 'root.authorized.task.list';
            }
            return result;
        }
    }
})();
