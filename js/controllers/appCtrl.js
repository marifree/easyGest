app.controller('AppCtrl', ['$scope', '$location', '$mdSidenav', function($scope, $location, $mdSidenav) {
	//verifica se si trova nella pagina di login
	$scope.isLogin = !!($location.path() == '/login');
	
	//menu 
	$scope.menu = [
	    {
	      link : '/',
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
	      link : '',
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
	    },
	    {
	      link : 'showListBottomSheet($event)',
	      title: 'Settings',
	      icon: 'settings',
	      active : false
	    }
  	];

  	$scope.viewTitle = false;

  	$scope.go = function(path){ $location.path( path ); }

  	$scope.toggleSidenav = function(menuId) {
	    $mdSidenav(menuId).toggle();
	};
	
}]);