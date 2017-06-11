(function () {

    'use strict';

    angular
        .module('application.event')
        .component('eventSectionView', {
            controller: 'eventSectionViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/event/event-section-view.component.html'
        });
})();
