(function () {

    'use strict';

    angular
        .module('application.candidate')
        .component('candidateSectionView', {
            controller: 'candidateSectionViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/candidate/candidate-section-view.component.html'
        });
})();
