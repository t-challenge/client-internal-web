(function () {

    'use strict';

    angular
        .module('application.miscellaneous')
        .component('lostView', {
            controller: 'lostViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/miscellaneous/lost-view.component.html'
        });
})();
