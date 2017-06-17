(function () {

    'use strict';

    angular
        .module('application.event')
        .controller('eventListViewController', [
            '$state',
            'eventService',
            EventListViewController
        ]);

    function EventListViewController($state,
                                     eventService) {

        var self = this;

        self.$onInit = function () {
            self.search();
        };

        self.navigateNewEvent = function () {
            $state.go('root.authorized.event.new');
        };

        self.search = function () {

            eventService

                .search({})

                .then(function (searchResult) {
                    self.events = searchResult.items;
                });
        };
    }
})();
