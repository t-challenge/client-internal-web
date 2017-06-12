(function () {

    'use strict';

    angular
        .module('application')
        .config(['$locationProvider', function ($locationProvider) {
                $locationProvider.html5Mode(true);
            }
        ])
        .config(['$urlMatcherFactoryProvider', function ($urlMatcherFactoryProvider) {
            $urlMatcherFactoryProvider.strictMode(false);
        }
        ])
        .factory('httpRequestInterceptor', [
            '$localStorage',
            'loggerService',
            httpRequestInterceptor
        ])
        .config([
            '$httpProvider',
            configureHttpProvider
        ]);

    function configureHttpProvider($httpProvider) {
        $httpProvider.interceptors.push('httpRequestInterceptor');
    }

    function httpRequestInterceptor($localStorage, loggerService) {
        return {
            request: function (config) {
                var authentication = $localStorage.authentication;
                if (authentication) {
                    var token = authentication.token.id;
                    config.headers['T-Challenge-Security-Token'] = token;
                    loggerService.debug("HTTP interceptor applied token: " + token);
                }
                return config;
            }
        };
    }
})();
