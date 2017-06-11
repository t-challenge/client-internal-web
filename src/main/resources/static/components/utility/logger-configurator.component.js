(function () {

    'use strict';

    angular
        .module('application.utility')
        .component('loggerConfigurator', {
            bindings: {
                level: '@'
            },
            controller: 'loggerConfiguratorController',
            controllerAs: 'self'
        });
})();
