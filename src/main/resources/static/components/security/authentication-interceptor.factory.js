(function () {

    'use strict';

    angular
        .module('application.security')
        .factory('httpRequestInterceptorFactory', [
            '$localStorage',
            'loggerService',
            'securityTokenHeader',
            httpRequestInterceptorFactory
        ]);

    function httpRequestInterceptorFactory($localStorage,
                                           loggerService,
                                           securityTokenHeader) {
        return {
            request: function (configuration) {
                var authentication = $localStorage.authentication;
                if (authentication) {
                    var token = authentication.token.id;
                    configuration.headers[securityTokenHeader] = token;
                    loggerService.debug("security token: " + token);
                }
                return configuration;
            }
        };
    }
})();
