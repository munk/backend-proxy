angular.module('backendProxyTest.core', [])
    .controller('Ctrl',
                ['$http', Ctrl]);

function Ctrl($http) {
    var vm = this;

    function handleSuccess(response) {
        console.log('success!');
        vm.data = response.data;
        vm.success = true;
    }

    function handleError(response) {
        console.log('failure!');
        vm.data = response;
        vm.success = false;
    }

    $http.get('https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.jxs')
        .then(handleSuccess, handleError);
    return vm;
}
