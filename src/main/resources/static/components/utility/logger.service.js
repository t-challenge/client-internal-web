(function () {

    'use strict';

    angular
        .module('application.utility')
        .service('loggerService', [UrlResolverService]);

    function UrlResolverService() {

        var self = this;

        var levels = ['debug, info, warn, error'];
        var configuration;

        self.configure = function (newConfiguration) {
            configuration = newConfiguration;
        };

        self.debug = function (message) {
            self.log('debug', message);
        };

        self.info = function (message) {
            self.log('info', message);
        };

        self.warn = function (message) {
            self.log('warn', message);
        };

        self.error = function (message) {
            self.log('error', message);
        };

        self.log = function (level, message) {
            // TODO: check log level
            // TODO: log according to level
            console.log(message);
        };
    }
})();
