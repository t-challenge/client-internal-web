(function () {

    'use strict';

    angular
        .module('application.task')
        .service('taskService', [
            '$http',
            'loggerService',
            'urlResolverService',
            TaskService
        ]);

    function TaskService($http,
                         loggerService,
                         urlResolverService) {

        var self = this;

        var baseTaskUrl = urlResolverService.resolveKernelServiceUrl('tasks');

        self.create = function (invoice) {

        };

        self.get = function (id) {
            return $http
                .get(urlResolverService.resolveKernelServiceUrl('tasks', id))
                .then(function (response) {
                    return response.data;
                }).catch(function (response) {
                    loggerService.error("getting task by id has failed");
                });
        };

        self.update = function (invoice) {

        };

        self.search = function (invoice) {
            return $http
                .get(baseTaskUrl, invoice)
                .then(function (response) {
                    return response.data;
                }).catch(function (response) {
                    loggerService.error("task search has failed");
                });
        };
    }
})();
