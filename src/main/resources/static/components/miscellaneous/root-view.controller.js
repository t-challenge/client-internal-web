(function () {

    'use strict';

    angular
        .module('application.miscellaneous')
        .controller('rootViewController', [
            '$state',
            'homeStateContextService',
            'authenticationContextService',
            RootViewController]);

    function RootViewController($state,
                                homeStateContextService,
                                authenticationContextService) {

        var self = this;

        self.$onInit = function () {
            if (!authenticationContextService.getAuthentication()) {
                $state.go('root.logon');
            } else if ($state.is('root')) {
                $state.go(homeStateContextService.getHomeState());
            }
        };
    }
})();
