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

        self.navigateStatisticSpace = function () {
            $state.go('root.authorized.statistic');
        };

        self.navigateCandidateSpace = function () {
            $state.go('root.authorized.candidateSpace');
        };

        self.navigateEventSpace = function () {
            $state.go('root.authorized.eventSpace');
        };

        self.navigateTaskSpace = function () {
            $state.go('root.authorized.taskSpace');
        };

        self.navigateWorkbookSpace = function () {
            $state.go('root.authorized.workbookSpace');
        };

        self.navigateProfileSpace = function () {
            $state.go('root.authorized.profileSpace');
        };

        self.deauthenticate = function () {
            authenticationService.deauthenticate();
            $state.go('root.login');
        };

        function handleStateUpdate(menuState) {
            self.menuState = menuState;
        }

        function profileName(authentication) {
            return authentication.login;
        }
    }
})();
