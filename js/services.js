app.service('api', ['$http', 'BASE_URL', function($http, BASE_URL){
	
	this.get = function(service){
		return $http.get(BASE_URL+service+'.json')
			.then(
				function(response){ console.log('ok', response); return response.data.MESSAGE; }, //success callback
				function(response){ console.log('error', response); return response; } //error callback
	      	);
	}

	this.set = function(){

	}

}]);