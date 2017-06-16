(function() {
    "use strict";
    angular
        .module('app')
        .controller('DashboardController', DashboardController);

        DashboardController.$inject = [];

        function DashboardController() {
            var vm = this;

            vm.image = {
                'src': 'assets/images/rodrigo.jpg',
                'alt': 'Rodrigo'
            };

            vm.data = [
                {
                    'icon': 'code',
                    'title': 'Criação',
                    'description': 'Aspirante a desenvolvedor.'
                },
                {
                    'icon': 'gamepad',
                    'title': 'Jogos',
                    'description': 'Sempre que possível.'
                },
                {
                    'icon': 'gears',
                    'title': 'Linux',
                    'description': 'Aprender e ensinar.'
                },
                {
                    'icon': 'heartbeat',
                    'title': 'Corrida',
                    'description': 'Saúde em primeiro lugar!'
                }
            ];
        }
})();
