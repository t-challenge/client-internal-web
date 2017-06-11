(function () {

    'use strict';

    angular
        .module('application.utility')
        .component('authorizedView', {
            controller: 'authorizedViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/utility/authorized-view.component.html'
        });
})();
