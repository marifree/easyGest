app.controller('CompaniesCtrl', ['$scope', 'api' ,function($scope, api) {
	api.call('listaAziende').then(function(response){
		$scope.companies = response.AZIENDE;
	});

	$scope.edit = function(company){
		$scope.company = company;		
	}
}]);