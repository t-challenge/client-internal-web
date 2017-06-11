(function () {

    'use strict';

    angular
        .module('application.profile')
        .component('profileSectionView', {
            controller: 'profileSectionViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/profile/profile-section-view.component.html'
        });
})();
