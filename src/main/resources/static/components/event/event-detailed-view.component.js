(function () {

    'use strict';

    angular
        .module('application.event')
        .component('eventDetailedView', {
            controller: 'eventDetailedViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/event/event-detailed-view.component.html'
        });
})();
