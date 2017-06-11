(function () {

    'use strict';

    angular
        .module('application.miscellaneous')
        .controller('rootViewController', [
            '$state',
            RootViewController]);

    function RootViewController($state) {

        var self = this;

        self.$onInit = function () {
            if ($state.is('root')) {
                $state.go('root.authorized.statistic');
            }
        };
    }
})();
