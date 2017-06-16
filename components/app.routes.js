(function() {
    "use strict";
    angular
        .module('app')
        .config(config);

        function config($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'components/views/dashboard/dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm'
                })
                .when('/sobre', {
                    templateUrl: 'components/views/sobre/sobre.html',
                    controller: 'SobreController',
                    controllerAs: 'vm'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
})();
