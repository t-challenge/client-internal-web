(function () {

    'use strict';

    angular
        .module('application.event')
        .component('eventForm', {
            bindings: {
                textcode: '@',
                mode: '@'
            },
            controller: 'eventFormController',
            controllerAs: 'self',
            templateUrl: 'static/components/event/event-form.component.html'
        });
})();
