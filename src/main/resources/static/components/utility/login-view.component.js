(function () {

    'use strict';

    angular
        .module('application.utility')
        .component('loginView', {
            controller: 'loginViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/utility/login-view.component.html'
        });
})();
