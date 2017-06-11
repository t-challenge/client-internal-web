(function () {

    'use strict';

    angular
        .module('application.candidate')
        .component('candidateListView', {
            controller: 'candidateListViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/candidate/candidate-list-view.component.html'
        });
})();
