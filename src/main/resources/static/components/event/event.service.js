(function () {

    'use strict';

    angular
        .module('application.event')
        .service('eventService', [
            '$http',
            'loggerService',
            'urlResolverService',
            EventService
        ]);

    function EventService($http,
                          loggerService,
                          urlResolverService) {

        var self = this;

        self.create = function (invoice) {

            return $http

                .post(resolveUrl(), invoice)

                .then(function (response) {
                    return response.data;
                })

                .catch(function (response) {
                    loggerService.error("creating event has failed");
                    throw response;
                });
        };

        self.get = function (id) {

            return $http

                .get(resolveUrl(id))

                .then(function (response) {
                    return response.data;
                })

                .catch(function (response) {
                    loggerService.error("getting event by id has failed");
                    throw response
                });
        };

        self.update = function (invoice) {

            return $http

                .put(resolveUrl(), invoice)

                .then(function (response) {
                    return response.data;
                })

                .catch(function (response) {
                    loggerService.error("updating event has failed");
                    throw response;
                });
        };

        self.search = function (invoice) {

            return $http

                .get(resolveUrl(), invoice)

                .then(function (response) {
                    return response.data;
                })

                .catch(function (response) {
                    loggerService.error("searching for events has failed");
                    throw response;
                });
        };

        var preResolvedUrl = urlResolverService.resolveKernelServiceUrl('tasks');

        function resolveUrl() {
            // TODO: replace with safe check
            if (!id) {
                return preResolvedUrl;
            } else {
                return [preResolvedUrl, id].join('/');
            }
        }
    }
})();
