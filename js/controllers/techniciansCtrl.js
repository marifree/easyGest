app.controller('TechniciansCtrl', ['$scope', 'api' ,function($scope, api) {		

	api.call('listaTecnici').then(function(response){
		$scope.technicians = response.TECNICI;
	});
	
	$scope.delete = function(id){

	}

	$scope.edit = function(id){

	}

	
}]);