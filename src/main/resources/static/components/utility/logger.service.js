(function () {

    'use strict';

    angular
        .module('application.utility')
        .service('loggerService', [UrlResolverService]);

    function UrlResolverService() {

        var self = this;

        var levels = ['DEBUG, INFO, WARN, ERROR'];

        var configuration;
        var defaultConfiguration = {
            level: 'INFO'
        };

        self.configure = function (newConfiguration) {
            configuration = newConfiguration;
        };

        self.debug = function (message) {
            self.log('DEBUG', message);
        };

        self.info = function (message) {
            self.log('INFO', message);
        };

        self.warn = function (message) {
            self.log('WARN', message);
        };

        self.error = function (message) {
            self.log('ERROR', message);
        };

        self.log = function (level, message) {
            if (shouldLog(level)) {
                if (level === 'ERROR') {
                    console.error(message);
                } else if (level === 'WARN') {
                    console.warn(message)
                } else {
                    console.info(message);
                }
            }
        };

        function shouldLog(level) {
            var levelIndex = levels.indexOf(level);
            if (configuration && configuration.level) {
                return levelIndex >= levels.indexOf(configuration.level);
            } else {
                return levelIndex >= levels.indexOf(defaultConfiguration.level);
            }
        }
    }
})();
