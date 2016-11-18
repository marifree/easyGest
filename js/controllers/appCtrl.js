app.controller('AppCtrl', ['$scope', '$location', '$mdSidenav', '$rootScope', 'AuthFactory' , '$filter', function($scope, $location, $mdSidenav, $rootScope, AuthFactory, $filter) {
	
	//evanto cambio pagina
	$rootScope.$on('$routeChangeStart', function (event, toState) {
		//verifica se si trova nella pagina di login
		$scope.isLogin = !!($location.path() == '/login');
		$scope.viewTitle = !!($location.path() == '/technicians');

		angular.forEach($scope.menu, function(value, key){
			if(value.link == $location.path()) value.active = true;
			else value.active = false;
		})

    });

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
	      link : '/company',
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
	      link : '',
	      title: 'Trash',
	      icon: 'delete',
	      active : false
	    }
  	];

  	$scope.go = function(path){ $location.path( path ); }

  	$scope.toggleSidenav = function(menuId) {
	    $mdSidenav(menuId).toggle();
	};

	$scope.logout = function(){
		AuthFactory.deleteSession();
		$location.path( '/login' );
	}
	
	$scope.search = {};
	$scope.showSearch = false;
	
	$scope.toogleSearch = function(){
		$scope.showSearch = !$scope.showSearch;
	}
}]);