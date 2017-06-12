(function () {

    'use strict';

    angular
        .module('application', [
            'ui.router',
            'ngStorage',
            'application.utility',
            'application.candidate',
            'application.event',
            'application.miscellaneous',
            'application.profile',
            'application.statistic',
            'application.task',
            'application.workbook'
        ]);
})();
