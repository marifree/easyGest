app.controller('ChangePasswordCtrl', ['$scope', 'api', 'AuthFactory', '$location', function($scope, api, AuthFactory, $location) {
	
	$scope.changePassword = function(credentials){
		console.log(credentials);
		api.call('updatePasswordAzienda', credentials).then(function(response){ if(response){ $location.path('/company/'); }});

	}
}]);