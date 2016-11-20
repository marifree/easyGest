app.controller('CompanyCtrl', ['$scope', 'api', '$routeParams', '$window',function($scope, api, $routeParams, $window) {		
	var params = {};
	if($routeParams.id) params.piva = $routeParams.id;

	api.call('datiAzienda', params).then(function(response){
		$scope.company = response;
		$scope.file = $scope.company.logoPath;
		$scope.original_company = angular.copy($scope.company);
	});
	
	$scope.setedit = function(){$scope.edit = true;}

	$scope.editCompany = function(fields){
		var img = document.getElementById('uploadeImage');
		var img_url = img.src.split('data:image/png;base64');
		if(img_url.length > 1 && !angular.element(img).hasClass('ng-hide')) {
			fields.logo = img_url[1];
		}
		else{delete fields.logo;}
		var params = findDiff($scope.original_company, fields)
		api.call('updateDatiAzienda', params).then(function(response){ $window.history.back(); });

	}

	$scope.reset = function(){
		$scope.company = angular.copy($scope.original_company);
	}

	function findDiff(original, edited){
        var diff = {}
        angular.forEach(edited, function(value, key){
        	if(value !== original[key]){
        		 diff[key] = value;
        	}
        });
        
        return diff;
    }
}]);
 

