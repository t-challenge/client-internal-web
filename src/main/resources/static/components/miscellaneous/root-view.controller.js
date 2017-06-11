(function () {

    'use strict';

    angular
        .module('application.miscellaneous')
        .controller('rootViewController', [
            '$state',
            'authenticationContextService',
            RootViewController]);

    function RootViewController($state,
                                authenticationContextService) {

        var self = this;

        self.$onInit = function () {
            if (!authenticationContextService.getAuthentication()) {
                $state.go('root.login');
            } else if ($state.is('root')) {
                $state.go('root.authorized.statistic');
            }
        };
    }
})();
