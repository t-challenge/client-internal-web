(function () {

    'use strict';

    angular
        .module('application.utility')
        .controller('loggerConfiguratorController', [
            'loggerService',
            LoggerConfiguratorController]);

    function LoggerConfiguratorController(loggerService) {

        var self = this;

        self.$onInit = function () {
            loggerService.configure({
                level: self.level
            });
        };
    }
})();
