app.service('api', ['$http', 'BASE_URL', 'AuthFactory', '$rootScope', '$location', '$mdDialog',
	function($http, BASE_URL, AuthFactory, $rootScope, $location, $mdDialog){

	this.call = function(service, params){
		var parameters = params ? params : {};
		if(AuthFactory.isAuthenticated()) parameters.sessionid = AuthFactory.getSessionID();		

		var config =  { method : 'POST', url : BASE_URL+service+'.php',  headers : [{ 'Content-type' : 'application/json' }], data : parameters };
		
		$rootScope.$broadcast("startcallservice");

		return $http(config)
			.then(
				function(response){ if(response.data.STATUS == 'OK'){  $rootScope.$broadcast("endcallservice"); return response.data.MESSAGE; } else { return handleError(response); } }, //success callback
				function(response){ return handleError(response); } //error callback
	      	);
	}

	var handleError = function(response){
		console.log('-- ERROR --', response);

		$rootScope.$broadcast("endcallservice");
		
		/* -------------- gestione errore ------------------- */
		if(response.data != null){
			switch(response.data.ERROR_CODE){
				case '4001':
					AuthFactory.deleteSession();
					$location.path('/login');
				break;
				default:
					$mdDialog.show($mdDialog.alert().clickOutsideToClose(false).title('Attenzione.').textContent(response.data.ERROR).ok('Ok'))
						.then(function(){ console.log('ok'); }, function(){ console.log('error'); });
				break;
			}
		}
		else{
			$mdDialog.show(
		      $mdDialog.alert()
		        .clickOutsideToClose(true)
		        .title('Attenzione.')
		        .textContent('Errore dal server')
		        .ok('Ok')
		    ).then(function(){console.log('errore')});
		}

		return false;
	}	

}]);				

