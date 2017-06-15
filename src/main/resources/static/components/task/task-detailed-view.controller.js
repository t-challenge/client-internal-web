(function () {

    'use strict';

    angular
        .module('application.task')
        .controller('taskDetailedViewController', [
            '$stateParams',
            TaskDetailedViewController
        ]);

    function TaskDetailedViewController($stateParams) {

        var self = this;

        self.$onInit = function () {
            self.id = $stateParams['id'];
        };
    }
})();
