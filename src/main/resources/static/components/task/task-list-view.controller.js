(function () {

    'use strict';

    angular
        .module('application.task')
        .controller('taskListViewController', [
            '$state',
            'taskService',
            TaskListViewController
        ]);

    function TaskListViewController($state,
                                    taskService) {

        var self = this;

        self.$onInit = function () {
            self.search();
        };

        self.navigateNewTask = function () {
            $state.go('root.authorized.task.new');
        };

        self.search = function () {
            taskService
                .search({

                })
                .then(function (searchResult) {
                    self.tasks = searchResult.items;
                });
        };
    }
})();
