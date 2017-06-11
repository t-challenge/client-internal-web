(function () {

    'use strict';

    angular
        .module('application.utility')
        .service('urlResolverService', [UrlResolverService]);

    function UrlResolverService() {

        var self = this;

        var configuration;

        self.configure = function (newConfiguration) {
            configuration = newConfiguration;
        };

        self.resolveKernelServiceUrl = function () {
            var url = [];
            url.push(configuration.serviceKernelUrl);
            for (var i = 0; i < arguments.length; i++) {
                url.push(arguments[i]);
            }
            return url.join('/');
        };

        self.resolveUrl = function () {
            var url = [];
            url.push(configuration.url);
            for (var i = 0; i < arguments.length; i++) {
                url.push(arguments[i]);
            }
            return url.join('/');
        };
    }
})();
