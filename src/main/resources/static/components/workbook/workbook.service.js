(function () {

    'use strict';

    angular
        .module('application.workbook')
        .service('workbookService', [
            '$http',
            'loggerService',
            'urlResolverService',
            WorkbookService
        ]);

    function WorkbookService($http,
                             loggerService,
                             urlResolverService) {

        var self = this;

        self.get = function (id) {

            return $http

                .get(resolveUrl(id))

                .then(function (response) {
                    return response.data;
                })

                .catch(function (response) {
                    loggerService.error("getting workbook by id has failed");
                    throw response
                });
        };

        self.search = function (invoice) {

            return $http

                .get(resolveUrl(), invoice)

                .then(function (response) {
                    return response.data;
                })

                .catch(function (response) {
                    loggerService.error("searching for workbooks has failed");
                    throw response;
                });
        };

        var preResolvedUrl = urlResolverService.resolveKernelServiceUrl('workbooks');

        function resolveUrl(id) {
            // TODO: replace with safe check
            if (!id) {
                return preResolvedUrl;
            } else {
                return [preResolvedUrl, id].join('/');
            }
        }
    }
})();
