(function () {

    'use strict';

    angular
        .module('application.event')
        .controller('eventDetailedViewController', [
            '$stateParams',
            EventDetailedViewController
        ]);

    function EventDetailedViewController($stateParams) {

        var self = this;

        self.$onInit = function () {
            self.textcode = $stateParams['textcode'];
        };
    }
})();
