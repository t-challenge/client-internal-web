(function () {

    'use strict';

    angular
        .module('application', [
            'ui.router',
            'ngStorage',
            'application.candidate',
            'application.miscellaneous',
            'application.statistic'
        ]);
})();
