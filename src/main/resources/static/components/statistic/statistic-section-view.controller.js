(function () {

    'use strict';

    angular
        .module('application.statistic')
        .controller('statisticSectionViewController', [
            'menuConfiguratorService',
            StatisticSectionViewController
        ]);

    function StatisticSectionViewController(menuConfiguratorService) {

        var self = this;

        self.$onInit = function () {
            menuConfiguratorService.updateMenuState('statisticSection');
        };
    }
})();
