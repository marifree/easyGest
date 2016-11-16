var app = angular.module('StarterApp', ['ngMaterial', 'ngRoute','ngMdIcons','ngAnimate', 'ngAria','ngMessages', 'ngFileUpload']);

/* ---- ROUTE ---- */
app.config(['$routeProvider', '$mdThemingProvider', function ($routeProvider, $mdThemingProvider){
    $routeProvider.
        when('/', {
        templateUrl: 'templates/home-company.html',
        controller: 'HomeCompanyCtrl',
    }).
        when('/edit-company', {
        templateUrl: 'templates/edit-company.html',
        controller: 'HomeCompanyCtrl',
    }).
        when('/technicians', {
        templateUrl: 'templates/technicians.html',
        controller: 'TechniciansCtrl',
    });

    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange'); 
}]);

/* ---- CONSTANT ---- */
// http://www.bluelionsoftware.com/easyGest/v1/
app.constant('BASE_URL', 'api/');

