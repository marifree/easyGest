app.controller('TechniciansCtrl', ['$scope', 'api' ,function($scope, api) {		

	api.get('listaTecnici').then(function(response){
		$scope.technicians = response.TECNICI;
	});
	
	
}]);