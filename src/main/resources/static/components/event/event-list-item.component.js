(function () {

    'use strict';

    angular
        .module('application.event')
        .component('eventListItem', {
            bindings: {
                task: '<'
            },
            controller: 'eventListItemController',
            controllerAs: 'self',
            templateUrl: 'static/components/event/event-list-item.component.html'
        });
})();
