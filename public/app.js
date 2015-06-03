var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'views/login.html',
        controller: 'login'
    })

    .when('/sys', {
        templateUrl: 'views/sys.html',
        controller: 'login'
    })
    
});

app.controller('login', function($rootScope, $scope, $http, $location){

    $scope.signin = function (){
        $http.post('/login', {email:$scope.email, password:$scope.password}).then(function (res){
            if(res.data.err){
                $rootScope.session = {
                    logado:false
                };
            }
            else{
                $rootScope.session = res.data
                $location.path = '/sys'
            }
        })
    }

    $scope.logout = function(){
        $http.get('/logout').then(function (res){
            $rootScope.session.logado = false;
        });
    }


});