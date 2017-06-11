(function () {

    'use strict';

    angular
        .module('application.menu')
        .controller('menuController', [
            '$state',
            'authenticationService',
            'authenticationContextService',
            'menuConfiguratorService',
            MenuController]);

    function MenuController($state,
                            authenticationService,
                            authenticationContextService,
                            menuConfiguratorService) {

        var self = this;

        self.$onInit = function () {
            menuConfiguratorService.registerStateListener(handleStateUpdate);
            self.authentication = authenticationContextService.getAuthentication();
            if (self.authentication) {
                self.profile = profileName(self.authentication);
            }
        };

        self.navigateStatisticSection = function () {
            $state.go('root.authorized.statistic');
        };

        self.navigateCandidateSection = function () {
            $state.go('root.authorized.candidate.list');
        };

        self.navigateEventSection = function () {
            $state.go('root.authorized.event.list');
        };

        self.navigateTaskSection = function () {
            $state.go('root.authorized.task.list');
        };

        self.navigateWorkbookSection = function () {
            $state.go('root.authorized.workbook.list');
        };

        self.navigateProfileSection = function () {
            $state.go('root.authorized.profile');
        };

        self.deauthenticate = function () {
            authenticationService.deauthenticate();
            $state.go('root.login');
        };

        function handleStateUpdate(menuState) {
            self.menuState = menuState;
        }

        function profileName(authentication) {
            return authentication.account.login;
        }
    }
})();
