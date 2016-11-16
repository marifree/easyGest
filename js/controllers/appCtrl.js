app.controller('AppCtrl', ['$scope', '$location', function($scope, $location) {
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
}]);