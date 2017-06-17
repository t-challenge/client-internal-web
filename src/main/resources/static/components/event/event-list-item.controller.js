(function () {

    'use strict';

    angular
        .module('application.event')
        .controller('eventListItemController', [
            '$state',
            EventListItemController
        ]);

    function EventListItemController($state) {

        var self = this;

        self.navigateDetailedView = function () {
            $state.go('root.authorized.event.detailed', {
                id: self.event.id
            });
        };
    }
})();
