(function () {

    'use strict';

    angular
        .module('application.candidate')
        .controller('candidateSectionViewController', [
            'menuConfiguratorService',
            CandidateSectionViewController
        ]);

    function CandidateSectionViewController(menuConfiguratorService) {

        var self = this;

        self.$onInit = function () {
            menuConfiguratorService.updateMenuState('candidateSection');
        };
    }
})();
