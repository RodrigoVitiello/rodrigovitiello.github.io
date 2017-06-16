(function(){
    "use strict";
    angular
        .module('app')
        .directive('appNavbar', appNavbar);

        function appNavbar() {
            return {
                restrict: 'E',
                templateUrl: 'components/views/app-navbar/app-navbar.html',
                controller: 'AppNavbarController'
            };
        }
})();
