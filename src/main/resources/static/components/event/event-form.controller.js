(function () {

    'use strict';

    angular
        .module('application.event')
        .controller('eventFormController', [
            '$state',
            'eventService',
            EventFormController
        ]);

    function EventFormController($state,
                                 eventService) {

        var self = this;

        self.$onInit = function () {
            get();
        };

        self.create = function () {
            eventService.create(self.event);
        };

        self.update = function () {
            eventService.update(self.event);
        };

        self.navigateListView = function () {
            $state.go('root.authorized.event.list');
        };

        function get() {

            eventService

                .get(self.textcode)

                .then(function (event) {
                    self.event = event;
                });
        }
    }
})();
