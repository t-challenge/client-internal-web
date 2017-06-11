(function () {

    'use strict';

    angular
        .module('application.task')
        .controller('taskSectionViewController', [
            'menuConfiguratorService',
            TaskSectionViewController
        ]);

    function TaskSectionViewController(menuConfiguratorService) {

        var self = this;

        self.$onInit = function () {
            menuConfiguratorService.updateMenuState('taskSection');
        };
    }
})();
