(function () {

    'use strict';

    angular
        .module('application.miscellaneous')
        .component('loginView', {
            controller: 'loginViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/miscellaneous/login-view.component.html'
        });
})();
