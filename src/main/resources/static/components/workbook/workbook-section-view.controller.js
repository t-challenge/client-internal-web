(function () {

    'use strict';

    angular
        .module('application.workbook')
        .controller('workbookSectionViewController', [
            'menuConfiguratorService',
            WorkbookSectionViewController
        ]);

    function WorkbookSectionViewController(menuConfiguratorService) {

        var self = this;

        self.$onInit = function () {
            menuConfiguratorService.updateMenuState('workbookSection');
        };
    }
})();
