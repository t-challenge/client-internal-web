(function () {

    'use strict';

    angular
        .module('application.profile')
        .controller('profileSectionViewController', [
            'menuConfiguratorService',
            ProfileSectionViewController
        ]);

    function ProfileSectionViewController(menuConfiguratorService) {

        var self = this;

        self.$onInit = function () {
            menuConfiguratorService.updateMenuState('profileSection');
        };
    }
})();
