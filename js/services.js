app.service('api', ['$http', 'BASE_URL', function($http, BASE_URL){
	var config = {headers : { 'Content-Type': 'application/json;' }};
	this.call = function(service, params){
		return $http.post(BASE_URL+service+'.php', params, config)
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