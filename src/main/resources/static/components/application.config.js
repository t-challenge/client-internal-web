(function () {

    'use strict';

    angular
        .module('application')
        .config(['$locationProvider', function ($locationProvider) {
                $locationProvider.html5Mode(true);
            }
        ])
        .factory('httpRequestInterceptor', [
            '$localStorage',
            httpRequestInterceptor
        ])
        .config([
            '$httpProvider',
            configureHttpProvider
        ]);

    function configureHttpProvider($httpProvider) {
        $httpProvider.interceptors.push('httpRequestInterceptor');
    }

    function httpRequestInterceptor($localStorage) {
        return {
            request: function (config) {
                var token = $localStorage.securityToken;
                console.log("interceptor: " + token);
                if (token) {
                    config.headers['T-Challenge-Security-Token'] = token;
                }
                return config;
            }
        };
    }
})();
