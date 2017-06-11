(function () {

    'use strict';

    angular
        .module('application.event')
        .controller('eventSectionViewController', [
            'menuConfiguratorService',
            EventSectionViewController
        ]);

    function EventSectionViewController(menuConfiguratorService) {

        var self = this;

        self.$onInit = function () {
            menuConfiguratorService.updateMenuState('eventSection');
        };
    }
})();
