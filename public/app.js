var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

    .when('/sys'){
        templateUrl: 'views/sys.html'
    }
    .otherwise({
        redirectTo: '/'
    });
    
});

app.controller('login', function($rootScope, $scope, $http, $location){

    $scope.signin = function (){
        $http.get('/login').then(function (res){
            if(res.data.error){
                $rootScope.session = {
                    logado:false
                };
            }
            else{
                $rootScope.session = res.datal
            }
        })
    }

    $scope.logout = function(){
        $http.get('/logout').then(function (res){
            $rootScope.session.logado = false;
        });
    }


});