app.service('api', ['$http', 'BASE_URL', function($http, BASE_URL){
	
	this.call = function(service){
		return $http.post(BASE_URL+service+'.php')
			.then(
				function(response){ if(response.data.STATUS == 'OK'){ return response.data.MESSAGE; } else { return handleError(response); } }, //success callback
				function(response){ return handleError(response); } //error callback
	      	);
	}	

}]);

var handleError = function(response){
	console.log('-- ERROR --', response);
	return false;
}