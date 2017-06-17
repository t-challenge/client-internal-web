(function () {

    'use strict';

    angular
        .module('application.event')
        .component('eventListItem', {
            bindings: {
                event: '<'
            },
            controller: 'eventListItemController',
            controllerAs: 'self',
            templateUrl: 'static/components/event/event-list-item.component.html'
        });
})();
