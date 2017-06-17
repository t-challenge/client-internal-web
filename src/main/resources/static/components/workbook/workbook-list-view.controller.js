(function () {

    'use strict';

    angular
        .module('application.workbook')
        .controller('workbookListViewController', [
            '$state',
            'workbookService',
            WorkbookListViewController
        ]);

    function WorkbookListViewController($state,
                                        workbookService) {

        var self = this;

        self.$onInit = function () {
            self.search();
        };

        self.search = function () {

            workbookService

                .search({})

                .then(function (searchResult) {
                    self.workbooks = searchResult.items;
                });
        };
    }
})();
