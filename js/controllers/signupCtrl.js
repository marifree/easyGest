app.controller('SignupCtrl', ['$scope', 'api', 'AuthFactory', '$location', function($scope, api, AuthFactory, $location) {
	
	$scope.signup = function(params){
		params.web = 'web';
		api.call('registrazioneAzienda', params).then(function(response){ if(response){ $location.path('/login'); }});
	}

	
}]);