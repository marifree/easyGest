app.controller('LoginCtrl', ['$scope', 'api', 'AuthFactory', '$location', function($scope, api, AuthFactory, $location) {
	
	$scope.loginAdmin = function(credentials){
		api.call('loginAdmin', credentials).then(function(response){ if(response){ AuthFactory.setSession({id:response.SESSIONID, user: 'admin'}); $location.path('/companies'); }});
	}

	$scope.loginCompany = function(credentials){
		api.call('loginAzienda', credentials).then(function(response){ if(response){ AuthFactory.setSession({id:response.SESSIONID, user: 'company'}); $location.path('/company'); }});
	}

	$scope.login = function(credentials, isCompany){
		if(isCompany) $scope.loginCompany(credentials);
		else $scope.loginAdmin(credentials);
	}
}]);