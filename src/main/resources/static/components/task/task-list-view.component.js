(function () {

    'use strict';

    angular
        .module('application.task')
        .component('taskListView', {
            controller: 'taskListViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/task/task-list-view.component.html'
        });
})();
