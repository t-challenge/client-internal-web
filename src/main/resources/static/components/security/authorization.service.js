(function () {

    'use strict';

    angular
        .module('application.security')
        .service('authorizationService', [
            'loggerService',
            'authenticationContextService',
            AuthorizationService
        ]);

    function AuthorizationService(loggerService,
                                  authenticationContextService) {

        var self = this;

        self.employeeWithAny = function () {
            var authentication = authenticationContextService.getAuthentication();
            var employee = authentication && authentication.employee;
            if (!employee) {
                return false;
            }
            if (arguments.length === 0) {
                return true;
            }
            var roles = employee.roles;
            if (!roles || roles.length === 0) {
                return false;
            }
            if (roles.indexOf('ADMIN') > -1) {
                return true;
            }
            for (var i = 0; i < arguments.length; i++) {
                if (roles.indexOf(arguments[i]) > -1) {
                    return true;
                }
            }
            return false;
        };
    }
})();
