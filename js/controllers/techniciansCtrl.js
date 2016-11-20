app.controller('TechniciansCtrl', ['$scope', 'api' , '$routeParams', function($scope, api, $routeParams) {		

	api.call('listaTecnici').then(function(response){
		$scope.technicians = response.TECNICI;
		if($routeParams.id){
			var key = $routeParams.id;
			$scope.technic = $scope.technicians[key];		
		}
	});
	
	$scope.delete = function(id){

	}

	$scope.edit = function(id){

	}

	
	
}]);