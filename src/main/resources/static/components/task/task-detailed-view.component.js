(function () {

    'use strict';

    angular
        .module('application.task')
        .component('taskDetailedView', {
            controller: 'taskDetailedViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/task/task-detailed-view.component.html'
        });
})();
