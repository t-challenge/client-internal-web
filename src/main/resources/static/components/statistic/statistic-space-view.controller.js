(function () {

    'use strict';

    angular
        .module('application.statistic')
        .controller('statisticSpaceViewController', [
            'menuConfiguratorService',
            StatisticSpaceViewController
        ]);

    function StatisticSpaceViewController(menuConfiguratorService) {

        var self = this;

        self.$onInit = function () {
            menuConfiguratorService.updateMenuState('statisticSpace');
        };
    }
})();
