app.controller('AppCtrl', ['$scope', '$location', '$mdSidenav', '$rootScope', 'AuthFactory' , '$filter', 'api', '$window', function($scope, $location, $mdSidenav, $rootScope, AuthFactory, $filter, api, $window) {
	
	//evanto cambio pagina
	$rootScope.$on('$routeChangeStart', function (event, toState) {
		//verifica se si trova nella pagina di login
		$scope.isLogin = (!!($location.path() == '/login') || !!($location.path() == '/signup') || !!($location.path() == '/forgot-password') || !!($location.path() == '/update-password-by-code'));
		
		$scope.showToolbarSearchTech = !!($location.path() == '/technicians');
		$scope.showToolbarSearchOper = !!($location.path() == '/technical-operations');
		$scope.showToolbarSearchCompany = !!($location.path() == '/companies');

		angular.forEach($scope.menu, function(value, key){
			if(value.link == $location.path()) value.active = true;
			else value.active = false;
		});

		$scope.isAdmin = AuthFactory.isAdmin();

    });

    $scope.searchTech = {};
    $scope.searchOper = {};
    $scope.searchCompany = {};
    $scope.operations = [];
	$scope.toogleSearchTech = function(){
		$scope.showSearchOperearchTech = !$scope.showSearchOperearchTech;
	}

	$scope.toogleSearchOper = function(){
		$scope.showSearchOper = !$scope.showSearchOper;
	}

	$scope.toogleSearchCompany = function(){
		$scope.showSearchCompany = !$scope.showSearchCompany;
	}

	$scope.clicksearchOper = function(params){
		api.call('listaPDFInterventi', params).then(function(response){ if(response){ $scope.operations = response.interventiPDF; }});
		$scope.toogleSearchOper();
	}
	
	//evento inizio chiamata al servizio
    $rootScope.$on('startcallservice', function (event, toState) {
		$scope.showProgressbas = true;
    });

    //evento fine chiamata al servizio
    $rootScope.$on('endcallservice', function (event, toState) {
		$scope.showProgressbas = false;
    });

    
	//menu 
	$scope.menu = [
	    {
	      link : '/company/',
	      title: 'Dati azienda',
	      icon: 'dashboard',
	      active : true
	    },
	    {
	      link : '/technicians',
	      title: 'Tecnici',
	      icon: 'group',
	      active : false
	    },
	    {
	      link : '/technical-operations',
	      title: 'Interventi',
	      icon: 'message',
	      active : false
	    }
  	];
  	
  	//menu
  	$scope.admin = [
  		{
	      link : '/companies',
	      title: 'Lista aziende',
	      icon: 'list',
	      active : true
	    },
	    {
	      link : '/edit-company',
	      title: 'Aggiungi azienda',
	      icon: 'add',
	      active : false
	    },
  	];

  	$scope.go = function(path){ $location.path( path ); }
  	$scope.back = function(path){ $window.history.back(); }

  	$scope.toggleSidenav = function(menuId) {
	    $mdSidenav(menuId).toggle();
	};

	$scope.logout = function(){
		AuthFactory.deleteSession();
		$location.path( '/login' );
	}
	
	

	$scope.formatDate = function(date){
		if(typeof(date) == 'string' ){
			var datearray = date.split('-');
			if(datearray.length == 3) return datearray[2]+'/'+datearray[1]+'/'+datearray[0];
		}
		return '';
		
	}
}]);