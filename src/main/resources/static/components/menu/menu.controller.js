(function () {

    'use strict';

    angular
        .module('application.menu')
        .controller('menuController', [
            '$state',
            'homeStateContextService',
            'authenticationService',
            'authenticationContextService',
            'authorizationService',
            'menuConfiguratorService',
            MenuController]);

    function MenuController($state,
                            homeStateContextService,
                            authenticationService,
                            authenticationContextService,
                            authorizationService,
                            menuConfiguratorService) {

        var self = this;

        self.$onInit = function () {
            menuConfiguratorService.registerStateListener(handleStateUpdate);
            self.authentication = authenticationContextService.getAuthentication();
            resolvePermissions();
            if (self.authentication) {
                self.profile = profileName(self.authentication);
            }
        };

        self.navigateHome = function () {
            $state.go(homeStateContextService.getHomeState());
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

        self.navigateAccountSection = function () {
            $state.go('root.authorized.account.list');
        };

        self.navigateProfileSection = function () {
            $state.go('root.authorized.profile');
        };

        self.deauthenticate = function () {
            authenticationService.deauthenticate();
            $state.go('root.logon');
        };

        function handleStateUpdate(menuState) {
            self.menuState = menuState;
        }

        function profileName(authentication) {
            var account = authentication.account;
            var person = account.person;
            return person.quickname
                || [person.firstname, person.lastname].join(" ")
                || account.email;
        }

        function resolvePermissions() {
            self.permissions = {
                statistic: authorizationService.employeeWithAny(),
                candidate: authorizationService.employeeWithAny('CANDVIEW', 'CANDMOD'),
                event: authorizationService.employeeWithAny('EVENTVIEW', 'EVENTMOD'),
                task: authorizationService.employeeWithAny('TASKVIEW', 'TASKMOD'),
                workbook: authorizationService.employeeWithAny('WBKVIEW', 'WBKMOD'),
                account: authorizationService.employeeWithAny('USERMOD'),
                profile: authorizationService.employeeWithAny()
            };
        }
    }
})();
