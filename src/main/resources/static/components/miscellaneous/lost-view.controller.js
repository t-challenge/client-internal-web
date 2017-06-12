(function () {

    'use strict';

    angular
        .module('application.miscellaneous')
        .controller('lostViewController', [
            '$state',
            'homeStateContextService',
            LostViewController
        ]);

    function LostViewController($state,
                                homeStateContextService) {

        var self = this;

        self.navigateHome = function () {
            $state.go(homeStateContextService.getHomeState());
        };
    }
})();
