(function () {

    'use strict';

    angular
        .module('application.task')
        .controller('taskListItemController', [
            '$state',
            TaskListItemController
        ]);

    function TaskListItemController($state) {

        var self = this;

        self.navigateDetailedView = function () {
            $state.go('root.authorized.task.detailed', {
                id: self.task.id
            });
        };
    }
})();
