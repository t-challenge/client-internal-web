(function () {

    'use strict';

    angular
        .module('application.workbook')
        .component('workbookSectionView', {
            controller: 'workbookSectionViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/workbook/workbook-section-view.component.html'
        });
})();
