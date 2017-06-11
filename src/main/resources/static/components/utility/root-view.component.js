(function () {

    'use strict';

    angular
        .module('application.utility')
        .component('rootView', {
            controller: 'rootViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/utility/root-view.component.html'
        });
})();
