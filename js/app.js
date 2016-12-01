var app = angular.module('StarterApp', ['ngMaterial', 'ngRoute','ngMdIcons','ngAnimate', 'ngAria','ngMessages', 'ngFileUpload']);


app.config(['$routeProvider', '$mdThemingProvider', function ($routeProvider, $mdThemingProvider){
    
    /* ---- ROUTE ---- */
    $routeProvider.
        when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl',
    }).
        when('/signup', {
        templateUrl: 'templates/signup.html',
        controller: 'SignupCtrl',
    }).   
        when('/forgot-password', {
        templateUrl: 'templates/forgot-password.html',
        controller: 'LoginCtrl',
    }). 
        when('/update-password-by-code', {
        templateUrl: 'templates/update-password-by-code.html',
        controller: 'LoginCtrl',
    }).        
        when('/update-password', {
        templateUrl: 'templates/update-password.html',
        controller: 'UpdatePasswordCtrl',
    }). 
        when('/change-password', {
        templateUrl: 'templates/change-password.html',
        controller: 'ChangePasswordCtrl',
    }).       
        when('/company/', {
        templateUrl: 'templates/company.html',
        controller: 'CompanyCtrl',
    }).
        when('/companies', {
        templateUrl: 'templates/companies.html',
        controller: 'CompaniesCtrl',
    }).
        when('/edit-company/:id?', {
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
        when('/edit-technic/:id?', {
        templateUrl: 'templates/edit-technic.html',
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

    /* ---- THEMES ---- */
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange')
    .warnPalette('red') 
}]);

app.run(['$rootScope', 'AuthFactory', '$location', function($rootScope, AuthFactory, $location){
    if(!AuthFactory.isAuthenticated()){ $location.path('/login'); /* utente non autenticato */ }
    else{
        if($location.path() == '' && AuthFactory.isAdmin()){ $location.path('/companies'); }
        if($location.path() == '' && AuthFactory.isCompany()){ $location.path('/company'); }
    }
    
}]);

/* ---- CONSTANT ---- */
// http://www.bluelionsoftware.com/easyGest/v1/
app.constant('BASE_URL', 'http://www.bluelionsoftware.com/iGestTech/v1/');

//Direttiva validazione password
app.directive('pwCheck', [function () {
    return {
      require: 'ngModel',
      link: function (scope, elem, attrs, ctrl) {
        var firstPassword = '#' + attrs.pwCheck;
       
        angular.element(elem).on('keyup', function () {            
            scope.$apply(function () {
                var v = elem.val()===document.getElementById(attrs.pwCheck).value;
                ctrl.$setValidity('pwmatch', v);
            });
        });
      }
    }
  }]);

