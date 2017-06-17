(function () {

    'use strict';

    angular
        .module('application.workbook')
        .controller('workbookFormController', [
            '$state',
            'workbookService',
            WorkbookFormController
        ]);

    function WorkbookFormController($state,
                                    workbookService) {

        var self = this;

        self.$onInit = function () {
            get();
        };

        self.navigateListView = function () {
            $state.go('root.authorized.workbook.list');
        };

        function get() {

            workbookService

                .get(self.id)

                .then(function (workbook) {
                    self.workbook = workbook;
                });
        }
    }
})();
