(function() {
    "use strict";
    angular
        .module('app')
        .controller('AppNavbarController', AppNavbarController);

        AppNavbarController.$inject = ['$location'];

        function AppNavbarController($location) {
            var vm = this;

            vm.go = go;
            vm.currentNavItem = currentNavItem();

            vm.routes = [
                {
                    "name": "dashboard",
                    "desc": "Principal"
                },
                {
                    "name": "sobre",
                    "desc": "Sobre"
                }
            ];

            /**
             * Função que troca a rota
             * @param  object  route   Rota desejada.
             *
             * @return void
             */
            function go(route) {
                 vm.currentNavItem = route.name;
                $location.path('/' + route.name);
            }

            /**
             * Função que retorna o nome da rota atual.
             * Caso seja a rota padrão, retorna 'dashboard'.
             *
             * @return string   Rota atual.
             */
            function currentNavItem() {
                var nav = $location
                                .path()
                                .replace('/', '');
                if (!nav) {
                    return 'dashboard';
                }
                return nav;
            }
        }
})();
