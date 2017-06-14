(function () {

    'use strict';

    angular
        .module('application.task')
        .component('taskNewView', {
            controller: 'taskNewViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/task/task-new-view.component.html'
        });
})();
