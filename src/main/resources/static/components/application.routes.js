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
                url: 'statistics',
                views: {
                    '@root.authorized': {
                        component: 'statisticSectionView'
                    }
                }
            })

            .state('root.authorized.profile', {
                url: 'profile',
                views: {
                    '@root.authorized': {
                        component: 'profileSectionView'
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

            .state('root.authorized.event', {
                abstract: true,
                url: 'events',
                views: {
                    '@root.authorized': {
                        component: 'eventSectionView'
                    }
                }
            })

            .state('root.authorized.event.list', {
                url: '',
                views: {
                    '@root.authorized.event': {
                        component: 'eventListView'
                    }
                }
            })

            .state('root.authorized.task', {
                abstract: true,
                url: 'tasks',
                views: {
                    '@root.authorized': {
                        component: 'taskSectionView'
                    }
                }
            })

            .state('root.authorized.task.list', {
                url: '',
                views: {
                    '@root.authorized.task': {
                        component: 'taskListView'
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
