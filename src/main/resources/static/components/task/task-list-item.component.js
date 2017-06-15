(function () {

    'use strict';

    angular
        .module('application.task')
        .component('taskListItem', {
            bindings: {
                task: '<'
            },
            controller: 'taskListItemController',
            controllerAs: 'self',
            templateUrl: 'static/components/task/task-list-item.component.html'
        });
})();
