(function () {

    'use strict';

    angular
        .module('application.miscellaneous')
        .controller('authorizedViewController', [
            '$state',
            'authenticationService',
            AuthorizedViewController]);

    function AuthorizedViewController($http,
                                      authenticateService) {

        var self = this;

        self.deauthenticate = function () {
            authenticateService.deauthenticate();
            $state.go('root.login');
        };
    }
})();
