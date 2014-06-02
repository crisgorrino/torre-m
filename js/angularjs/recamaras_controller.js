
var HomeApp = angular.module('HomeApp', [],  function($interpolateProvider) {
	$interpolateProvider.startSymbol('<%');
	$interpolateProvider.endSymbol('%>');
});


HomeApp.controller('RecamarasCtrl', function ($scope, $http) {
	//$scope.recamaras = $http.get('js/angularjs/data/recamaras.json');
	
	$http.get('js/angularjs/data/recamaras.json')
   	.then(function(res){
      $scope.recamaras = res.data;                
    });


  	$scope.tipos = [];
  	$scope.showInfo = function(recamara){
  	
	 	$('.plantas-info-container').css('height','100%').addClass('active'); 

	 	$scope.tipos = recamara.tipos;

	 	$scope.showModelInfo(recamara.tipos[0]);
  	};

  	$scope.showModelInfo = function(modelo){
  		$scope.modelo = modelo;
  	};

  	$scope.showNext = function(){
  		
  		var current_order = $scope.modelo.order;
  		var next_order = current_order + 1;

  		var show_next = false;
  		var next_modelo = [];
		angular.forEach($scope.tipos, function(value, key){
			if(value.order == next_order){
				show_next = true;
				next_modelo = value;
			}
		}); 

		if(show_next){
			$scope.modelo = next_modelo;
		}
  		
  	};

  	$scope.showPrev = function(){
		var current_order = $scope.modelo.order;
  		var next_order = current_order - 1;


  		var show_prev = false;
  		var next_modelo = [];
		angular.forEach($scope.tipos, function(value, key){
			if(value.order == next_order){
				show_prev = true;
				next_modelo = value;
			}
		}); 

		if(show_prev){
			$scope.modelo = next_modelo;
		}
  	};
});