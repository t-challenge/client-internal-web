(function () {

    'use strict';

    angular
        .module('application.workbook')
        .component('workbookListItem', {
            bindings: {
                workbook: '<'
            },
            controller: 'workbookListItemController',
            controllerAs: 'self',
            templateUrl: 'static/components/workbook/workbook-list-item.component.html'
        });
})();
