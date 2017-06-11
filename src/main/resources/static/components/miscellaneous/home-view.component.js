(function () {

    'use strict';

    angular
        .module('application.miscellaneous')
        .component('homeView', {
            controller: 'homeViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/miscellaneous/home-view.component.html'
        });
})();
