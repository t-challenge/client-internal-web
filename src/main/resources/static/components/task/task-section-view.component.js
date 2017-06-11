(function () {

    'use strict';

    angular
        .module('application.task')
        .component('taskSectionView', {
            controller: 'taskSectionViewController',
            controllerAs: 'self',
            templateUrl: 'static/components/task/task-section-view.component.html'
        });
})();
