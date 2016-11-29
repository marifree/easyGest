app.controller('TechniciansCtrl', ['$scope', 'api' , '$routeParams', '$location', '$filter', '$window',
	function($scope, api, $routeParams, $location, $filter, $window) {		
	

	if($routeParams.id){
		api.call('datiTecnico',{username:$routeParams.id}).then(function(response){
			if(response) $scope.technic = response;		
		});
	}
	else{
		$scope.activationCode = $window.localStorage['code'];
		api.call('listaTecnici').then(function(response){
			if(response) $scope.technicians = response.TECNICI;		
		});
	}
	
	$scope.editTechnic = function(fields){				
		api.call('updateDatiTecnico',fields).then(function(response){
			$location.path('/technicians');
		});		
	}

	$scope.toogleActiveTechnic = function(username){
	 	var tecnico = $filter('filter')($scope.technicians, {username: username})[0];

		api.call('updateDatiTecnico',tecnico).then(function(response){
			
		});
	}

	
	
}]);