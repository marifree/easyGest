app.controller('TechniciansCtrl', ['$scope', 'api' , '$routeParams', '$location', '$filter', '$window', '$mdDialog',
	function($scope, api, $routeParams, $location, $filter, $window, $mdDialog) {		
	

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
		var text = ''; var title = '';
	 	var tecnico = $filter('filter')($scope.technicians, {username: username})[0];
	 	if(tecnico.isActive == '1'){text = 'Sei sicuro di voler disattivare questo tecnico?'; title = 'Disattivazione tecnico'; }
	 		else{ text = 'Sei sicuro di voler abilitare questo tecnico?'; title = 'Attivazione tecnico';}
	 			 var confirm = $mdDialog.confirm()
				        .clickOutsideToClose(true)
				        .title(title)
				        .textContent(text)
				        .ok('si')
				        .cancel('no');

				    $mdDialog.show(confirm).then(function() {
				      api.call('updateDatiTecnico',tecnico).then(function(response){ console.log(response) });
				    }, function() {tecnico.isActive = tecnico.isActive == '0' ? '1' : '0'  });
	 	
		
	}

	
	
}]);