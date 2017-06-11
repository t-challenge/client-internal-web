(function () {

    'use strict';

    angular
        .module('application.event')
        .component('eventListView', {
            controller: 'eventListViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/event/event-list-view.component.html'
        });
})();
