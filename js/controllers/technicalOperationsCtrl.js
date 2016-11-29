app.controller('TechnicalOperationsCtrl', ['$scope', 'api', '$window', function($scope, api, $window) {
	var params = {};
	$scope.initOper = function(params){
		api.call('listaPDFInterventi', params).then(function(response){ if(response){ $scope.operations = response.interventiPDF; }});
	}
	
	$scope.openUrl = function(url){
		$window.open(url,'_blank');
	}
	$scope.openZip = function(url){
		$window.open(url,'_self');
	}

	$scope.$watch('$parent.operations', function(val){
		console.log(val);
		$scope.operations = val;
	});
	

	$scope.initOper(params);
	
}]);