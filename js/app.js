var app = angular.module('StarterApp', ['ngMaterial', 'ngRoute','ngMdIcons','ngAnimate', 'ngAria','ngMessages', 'ngFileUpload']);

/* ---- ROUTE ---- */
app.config(['$routeProvider', '$mdThemingProvider', function ($routeProvider, $mdThemingProvider){
    $routeProvider.
        when('/login-admin', {
        templateUrl: 'templates/login.html',
        controller: 'LoginAdminCtrl',
    }).
        when('/login-company', {
        templateUrl: 'templates/login.html',
        controller: 'LoginCompanyCtrl',
    }).
        when('/update-password', {
        templateUrl: 'templates/update-password.html',
        controller: 'UpdatePasswordCtrl',
    }).        
        when('/company', {
        templateUrl: 'templates/company.html',
        controller: 'CompanyCtrl',
    }).
        when('/companies', {
        templateUrl: 'templates/companies.html',
        controller: 'CompaniesCtrl',
    }).
        when('/edit-company', {
        templateUrl: 'templates/edit-company.html',
        controller: 'CompanyCtrl',
    }).
        when('/add-company', {
        templateUrl: 'templates/edit-company.html',
        controller: 'CompanyCtrl',
    }).
        when('/technicians', {
        templateUrl: 'templates/technicians.html',
        controller: 'TechniciansCtrl',
    }).
        when('/technical-operations', {
        templateUrl: 'templates/technical-operations.html',
        controller: 'TechnicalOperationsCtrl',
    }).
        when('/renewal-account', {
        templateUrl: 'templates/renewal-account.html',
        controller: 'RenewalAccountCtrl',
    });



    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange'); 
}]);

/* ---- CONSTANT ---- */
// http://www.bluelionsoftware.com/easyGest/v1/
app.constant('BASE_URL', 'api/');

