(function () {

    'use strict';

    angular
        .module('application.security')
        .config([
            '$httpProvider',
            configureHttpProvider
        ]);

    function configureHttpProvider($httpProvider) {
        $httpProvider.interceptors.push('httpRequestInterceptorFactory');
    }
})();
