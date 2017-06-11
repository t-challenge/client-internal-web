(function () {

    'use strict';

    angular
        .module('application.menu')
        .service('menuConfiguratorService', [
            MenuConfiguratorService
        ]);

    function MenuConfiguratorService() {

        var self = this;

        self.registerStateListener = function (stateListener) {
            self.stateListener = stateListener;
            notifyStateListener();
        };

        self.updateMenuState = function (menuState) {
            self.menuState = menuState;
            notifyStateListener();
        };

        function notifyStateListener() {
            if (self.stateListener) {
                self.stateListener(self.menuState);
            }
        }
    }
})();
