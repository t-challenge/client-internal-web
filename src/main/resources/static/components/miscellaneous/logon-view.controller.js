(function () {

    'use strict';

    angular
        .module('application.miscellaneous')
        .controller('logonViewController', [
            '$state',
            'loggerService',
            'homeStateContextService',
            'authenticationService',
            'authenticationContextService',
            'authorizationService',
            LogonViewController
        ]);

    function LogonViewController($state,
                                 loggerService,
                                 homeStateContextService,
                                 authenticationService,
                                 authenticationContextService,
                                 authorizationService) {

        var self = this;

        self.$onInit = function () {
            var authentication = authenticationContextService.getAuthentication();
            if (authentication) {
                handleSuccessfulAuthentication(authentication);
            } else {
                homeStateContextService.reset();
            }
        };

        self.authenticate = function () {

            self.error = null;

            // TODO: check login and secret inputs

            authenticationService

                .authenticate({
                    login: self.email,
                    secret: self.secret
                })

                .then(function (authentication) {
                    console.log("INFO: handle success");
                    handleSuccessfulAuthentication(authentication);
                })

                .catch(function (response) {
                    console.log("ERROR: handle failure");
                    handleFailedAuthentication();
                });
        };

        function handleSuccessfulAuthentication(authentication) {
            homeStateContextService.setHomeState(homeState(authentication));
            $state.go(homeStateContextService.getHomeState());
        }

        function handleFailedAuthentication() {
            self.error = "Ошибка при попытке входа";
        }

        function homeState(authentication) {
            var stateSuffix = 'profile';
            if (authorizationService.employeeWithAny('TASK_MODERATOR')) {
                stateSuffix = 'task.list';
                loggerService.debug("has TASK_MODERATOR role");
            }
            if (authorizationService.employeeWithAny('ADMIN')) {
                stateSuffix = 'account.list';
                loggerService.debug("has ADMIN role");
            }
            return ['root.authorized', stateSuffix].join('.');
        }
    }
})();
