console.log('js');


let demoApp = angular.module('demoApp', []); 


demoApp.controller('SimpleController', function ($scope) {
    $scope.customers = [
        {name: 'Atty', city: 'Minneapolis'},
        {name: 'Reed', city: 'Minnetonka'},
        {name: 'Jesse', city: 'Nashville'}
    ]
})