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

            .state('root.logon', {
                url: 'logon',
                views: {
                    '@root': {
                        component: 'logonView'
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

            // --- EVENTS ---

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

            .state('root.authorized.event.detailed', {
                url: '/{textcode}/detailed',
                views: {
                    '@root.authorized.event': {
                        component: 'eventDetailedView'
                    }
                }
            })

            .state('root.authorized.event.new', {
                url: '/new',
                views: {
                    '@root.authorized.event': {
                        component: 'eventNewView'
                    }
                }
            })

            // --- TASKS ---

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

            .state('root.authorized.task.detailed', {
                url: '/{id:[0-9]*}',
                views: {
                    '@root.authorized.task': {
                        component: 'taskDetailedView'
                    }
                }
            })

            .state('root.authorized.task.new', {
                url: '/new',
                views: {
                    '@root.authorized.task': {
                        component: 'taskNewView'
                    }
                }
            })

            // --- WORKBOOKS ---

            .state('root.authorized.workbook', {
                abstract: true,
                url: 'workbooks',
                views: {
                    '@root.authorized': {
                        component: 'workbookSectionView'
                    }
                }
            })

            .state('root.authorized.workbook.list', {
                url: '',
                views: {
                    '@root.authorized.workbook': {
                        component: 'workbookListView'
                    }
                }
            })

            .state('root.authorized.workbook.detailed', {
                url: '/{id:[0-9]*}',
                views: {
                    '@root.authorized.workbook': {
                        component: 'workbookDetailedView'
                    }
                }
            })

            .state('root.authorized.account', {
                abstract: true,
                url: 'accounts',
                views: {
                    '@root.authorized': {
                        component: 'accountSectionView'
                    }
                }
            })

            .state('root.authorized.account.list', {
                url: '',
                views: {
                    '@root.authorized.account': {
                        component: 'accountListView'
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
