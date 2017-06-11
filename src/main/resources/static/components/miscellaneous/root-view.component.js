(function () {

    'use strict';

    angular
        .module('application.miscellaneous')
        .component('rootView', {
            controller: 'rootViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/miscellaneous/root-view.component.html'
        });
})();
