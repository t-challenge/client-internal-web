(function () {

    'use strict';

    angular
        .module('application.task')
        .controller('taskFormController', [
            '$state',
            'taskService',
            TaskFormController
        ]);

    function TaskFormController($state,
                                taskService) {

        var self = this;

        self.$onInit = function () {
            get();
        };

        self.create = function () {
            taskService.create(self.task);
        };

        self.update = function () {
            taskService.update(self.task);
        };

        self.navigateListView = function () {
            $state.go('root.authorized.task.list');
        };

        function get() {
            taskService
                .get(self.id)
                .then(function (task) {
                    self.task = task;
                });
        }
    }
})();
