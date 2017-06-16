(function(){
    "use strict";
    angular
        .module('app')
        .directive('appFooter', appFooter);

        function appFooter() {
            return {
                restrict: 'E',
                templateUrl: 'components/views/app-footer/app-footer.html',
                controller: 'AppFooterController'
            };
        }
})();
