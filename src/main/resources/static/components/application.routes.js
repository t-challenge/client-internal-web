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

            .state('root.login', {
                url: 'login',
                views: {
                    '@root': {
                        component: 'loginView'
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
            })

            .state('root.authorized.statistic', {
                url: 'statistic',
                views: {
                    '@root.authorized': {
                        component: 'statisticSpaceView'
                    }
                }
            })

            .state('root.lost', {
                url: '*path',
                views: {
                    '@root': {
                        component: 'lostView'
                    }
                }
            });
    }
})();
