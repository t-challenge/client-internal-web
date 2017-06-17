(function () {

    'use strict';

    angular
        .module('application.workbook')
        .controller('workbookListItemController', [
            '$state',
            WorkbookListItemController
        ]);

    function WorkbookListItemController($state) {

        var self = this;

        self.navigateDetailedView = function () {
            $state.go('root.authorized.workbook.detailed', {
                id: self.workbook.id
            });
        };
    }
})();
