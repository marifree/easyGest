app.controller('RenewalAccountCtrl', ['$scope', 'api', '$location', '$mdDialog', function($scope, api, $location, $mdDialog) {
	$scope.riepilogo =  null; 
	$scope.coupon = '';
	$scope.renewalAccount = function(params, action){
		params.comando = action;
		
		if(action == 'calcola'){ $scope.riepilogo = null; $scope.coupon = params.coupon;}
		else{
			params.coupon = $scope.coupon;
		}
		api.call('rinnovoAccountAzienda', params).then(function(response){ 
			
			if(action == 'calcola' && response){ $scope.riepilogo = response;}
			else{ 
				if(response == ''){
					$mdDialog.show(
				      $mdDialog.alert()
				        .clickOutsideToClose(true)
				        .title('Rinnovo account')
				        .textContent('Grazie, hai rinnovato il tuo account.')
				        .ok('Ok')
				    ).then(function() {
				      $location.path('/company/'); 
				    }, function() {
				      $location.path('/company/'); 
				    });
				}
				
			}
			
			
		});


	}
}]);