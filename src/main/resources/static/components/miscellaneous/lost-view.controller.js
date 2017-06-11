(function () {

    'use strict';

    angular
        .module('application.miscellaneous')
        .controller('lostViewController', [
            '$state',
            LostViewController
        ]);

    function LostViewController($state) {

        var self = this;

        self.navigateHome = function () {
            $state.go('root.authorized.statistic');
        };
    }
})();
