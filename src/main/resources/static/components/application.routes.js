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

            .state('root.authorized.candidate', {
                abstract: true,
                url: 'candidates',
                views: {
                    '@root.authorized': {
                        component: 'candidateSectionView'
                    }
                }
            })

            .state('root.authorized.candidate.list', {
                url: '',
                views: {
                    '@root.authorized.candidate': {
                        component: 'candidateListView'
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
