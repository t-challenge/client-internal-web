(function () {

    'use strict';

    angular
        .module('application.utility')
        .service('homeStateContextService', [
            '$localStorage',
            'loggerService',
            HomeStateContextService]);

    function HomeStateContextService($localStorage,
                                     loggerService) {

        var self = this;

        var homeState;
        var defaultHomeState = 'root.authorized.statistic';

        self.getHomeState = function () {
            if (!homeState) {
                homeState = $localStorage.homeState;
            }
            return homeState || defaultHomeState;
        };

        self.setHomeState = function (newHomeState) {
            homeState = newHomeState;
            $localStorage.homeState = newHomeState;
            loggerService.debug("home state context set");
        };

        self.reset = function () {
            homeState = null;
            $localStorage.homeState = null;
            loggerService.debug("home state context reset");
        };
    }
})();
