(function () {

    'use strict';

    angular
        .module('application.workbook')
        .controller('workbookDetailedViewController', [
            '$stateParams',
            WorkbookDetailedViewController
        ]);

    function WorkbookDetailedViewController($stateParams) {

        var self = this;

        self.$onInit = function () {
            self.id = $stateParams['id'];
        };
    }
})();
