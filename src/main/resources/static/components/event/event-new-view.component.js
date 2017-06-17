(function () {

    'use strict';

    angular
        .module('application.event')
        .component('eventNewView', {
            controller: 'eventNewViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/event/event-new-view.component.html'
        });
})();
