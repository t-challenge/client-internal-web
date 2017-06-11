(function () {

    'use strict';

    angular
        .module('application.utility')
        .component('urlResolverConfigurator', {
            bindings: {
                url: '@',
                serviceKernelUrl: '@'
            },
            controller: 'urlResolverConfiguratorController',
            controllerAs: 'self'
        });
})();
