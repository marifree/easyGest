app.service('api', ['$http', 'BASE_URL', 'AuthFactory', '$rootScope', function($http, BASE_URL, AuthFactory, $rootScope){

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
		return false;
	}	

}]);

