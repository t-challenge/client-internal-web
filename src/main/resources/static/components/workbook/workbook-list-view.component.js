(function () {

    'use strict';

    angular
        .module('application.workbook')
        .component('workbookListView', {
            controller: 'workbookListViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/workbook/workbook-list-view.component.html'
        });
})();
