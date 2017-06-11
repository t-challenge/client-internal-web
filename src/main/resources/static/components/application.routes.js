(function () {

    'use strict';

    angular
        .module('application')
        .config(['$stateProvider', configureStateProvider]);

    function configureStateProvider($stateProvider) {

        $stateProvider

            .state('root', {
                url: '/',
                views: {
                    '': {
                        component: 'rootView'
                    }
                }
            })

            .state('root.authorized', {
                abstract: true,
                views: {
                    '@root': {
                        component: 'authorizedView'
                    }
                }
            });
    }
})();
