(function () {

    'use strict';

    angular
        .module('application.menu')
        .component('menu', {
            controller: 'menuController',
            controllerAs: 'self',
            templateUrl: 'static/components/menu/menu.component.html'
        });
})();
