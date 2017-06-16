(function(){
    angular
        .module('app')
        .controller('SobreController', SobreController);

        function SobreController() {
            var vm = this;

            vm.data = [
                {
                    'icon': 'code',
                    'title': 'Teste',
                    'description': 'Testando o Angular Material!'
                }
            ];
        }
})();
