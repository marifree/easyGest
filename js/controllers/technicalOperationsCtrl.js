app.controller('TechnicalOperationsCtrl', ['$scope', 'api' ,function($scope, api) {
	
	api.call('listaPDFInterventi').then(function(response){ if(response){ $scope.operations = response.interventiPDF; }});
	
}]);