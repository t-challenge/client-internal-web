(function () {

    'use strict';

    angular
        .module('application.account')
        .component('accountListView', {
            controller: 'accountListViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/account/account-list-view.component.html'
        });
})();
