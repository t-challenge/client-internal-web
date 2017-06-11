(function () {

    'use strict';

    angular
        .module('application.miscellaneous')
        .controller('homeViewController', [
            'menuConfiguratorService',
            HomeViewController
        ]);

    function HomeViewController(menuConfiguratorService) {

        var self = this;

        self.$onInit = function () {
            menuConfiguratorService.updateMenuState('homeSpace');
        };
    }
})();
