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
        ]);
})();
