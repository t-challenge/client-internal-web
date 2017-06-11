(function () {

    'use strict';

    angular
        .module('application.statistic')
        .component('statisticSectionView', {
            controller: 'statisticSectionViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/statistic/statistic-section-view.component.html'
        });
})();
