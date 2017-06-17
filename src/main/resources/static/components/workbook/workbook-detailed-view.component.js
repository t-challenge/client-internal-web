(function () {

    'use strict';

    angular
        .module('application.workbook')
        .component('workbookDetailedView', {
            controller: 'workbookDetailedViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/workbook/workbook-detailed-view.component.html'
        });
})();
