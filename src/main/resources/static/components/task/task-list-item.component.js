(function () {

    'use strict';

    angular
        .module('application.task')
        .component('taskListItem', {
            bindings: {
                id: '@'
            },
            controller: 'taskListItemController',
            controllerAs: 'self',
            templateUrl: 'static/components/task/task-list-item.component.html'
        });
})();
