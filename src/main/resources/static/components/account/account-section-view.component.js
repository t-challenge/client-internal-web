(function () {

    'use strict';

    angular
        .module('application.account')
        .component('accountSectionView', {
            controller: 'accountSectionViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/account/account-section-view.component.html'
        });
})();
