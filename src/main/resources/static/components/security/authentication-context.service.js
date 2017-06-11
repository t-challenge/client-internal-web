(function () {

    'use strict';

    angular
        .module('application.security')
        .service('authenticationContextService', [
            '$localStorage',
            AuthenticationContextService
        ]);

    function AuthenticationContextService($localStorage) {

        var self = this;

        self.getAuthentication = function () {
            if (!self.authentication) {
                self.authentication = $localStorage.authentication;
            }
            return self.authentication;
        };

        self.setAuthentication = function (authentication) {
            self.authentication = authentication;
            $localStorage.authentication = authentication;
            console.log("INFO: authentication context set");
        };

        self.reset = function (authentication) {
            self.authentication = null;
            $localStorage.authentication = null;
            console.log("INFO: authentication context reset");
        };
    }
})();
