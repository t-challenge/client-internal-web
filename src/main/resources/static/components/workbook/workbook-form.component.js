(function () {

    'use strict';

    angular
        .module('application.workbook')
        .component('workbookForm', {
            bindings: {
                id: '@'
            },
            controller: 'workbookFormController',
            controllerAs: 'self',
            templateUrl: 'static/components/workbook/workbook-form.component.html'
        });
})();
