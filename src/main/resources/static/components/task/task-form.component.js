(function () {

    'use strict';

    angular
        .module('application.task')
        .component('taskForm', {
            bindings: {
                id: '@',
                mode: '@'
            },
            controller: 'taskFormController',
            controllerAs: 'self',
            templateUrl: 'static/components/task/task-form.component.html'
        });
})();
