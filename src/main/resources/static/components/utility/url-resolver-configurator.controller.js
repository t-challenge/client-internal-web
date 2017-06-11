(function () {

    'use strict';

    angular
        .module('application.utility')
        .controller('urlResolverConfiguratorController', [
            'urlResolverService',
            UrlResolverConfiguratorController]);

    function UrlResolverConfiguratorController(urlResolverService) {

        var self = this;

        self.$onInit = function () {
            urlResolverService.configure({
                url: self.url,
                serviceKernelUrl: self.serviceKernelUrl
            });
        };
    }
})();
