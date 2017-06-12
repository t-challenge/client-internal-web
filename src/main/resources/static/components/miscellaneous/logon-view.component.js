(function () {

    'use strict';

    angular
        .module('application.miscellaneous')
        .component('logonView', {
            controller: 'logonViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/miscellaneous/logon-view.component.html'
        });
})();
