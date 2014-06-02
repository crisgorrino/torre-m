
var HomeApp = angular.module('HomeApp', [],  function($interpolateProvider) {
	$interpolateProvider.startSymbol('<%');
	$interpolateProvider.endSymbol('%>');
});


HomeApp.controller('RecamarasCtrl', function ($scope, $http) {
	$scope.recamaras = [
	    {"recamaras": 1, 
	    	"tipos": [
	    		{
	    			"order":1,
	    			"modelo":"A", 
	    			"descripcion": "1 recámara, sala, comedor, cocina, 1 baño completo, 1 centro de lavado y terraza.",
	    			"m2":"79"
	    		},
	    		{
	    			"order":2,
	    			"modelo":"B",
	    			"descripcion": "1 recámara, sala, comedor, cocina, 1 baño completo, 1 centro de lavado, 1 bodega y terraza.",
	    			"m2":"82"
	    		},
	    		{
	    			"order":3,
	    			"modelo":"D",
	    			"descripcion" : "1 recámara, sala, comedor, cocina, 1 baño completo, 1 centro de lavado y terraza.",
	    			"m2":"83"
	    		},
	    	]
	    },
	    {"recamaras": 2, 
	    	"tipos": [
	    		{
	    			"order":1,
	    			"modelo":"C",
	    			"descripcion": "2 recámaras, sala, comedor, cocina, 1 baño completo, 1 centro de lavado y terraza.",
	    			"m2": "82"
	    		},
	    		{
	    			"order":2,
	    			"modelo":"E",
    				"descripcion": "2 recámaras, sala, comedor, cocina, 1 baño completo, 1 centro de lavado y terraza.",
	    			"m2": "82"
	    		},
	    		{
	    			"order":3,
	    			"modelo":"F",
    				"descripcion": "2 recámaras, sala, comedor, cocina, 1 baño completo, 1 centro de lavado y terraza.",
	    			"m2": "82"
	    		},
	    		{
	    			"order":4,
	    			"modelo":"G",
    				"descripcion": "2 recámaras, sala, comedor, cocina, 1 baño completo, 1 centro de lavado y terraza.",
	    			"m2": "82"
	    		},
	    		{
	    			"order":5,
	    			"modelo":"H",
    				"descripcion": "2 recámaras, sala, comedor, cocina, 1 baño completo, 1 centro de lavado y terraza.",
	    			"m2": "82"
	    		},
	    		{
	    			"order":6,
	    			"modelo":"I",
    				"descripcion": "2 recámaras, sala, comedor, cocina, 1 baño completo, 1 centro de lavado y terraza.",
	    			"m2": "82"
	    		},
	    		{
	    			"order":7,
	    			"modelo":"I2",
    				"descripcion": "2 recámaras, sala, comedor, cocina, 1 baño completo, 1 centro de lavado y terraza.",
	    			"m2": "82"
	    		},
	    		{
	    			"order":8,
	    			"modelo":"J",
    				"descripcion": "2 recámaras, sala, comedor, cocina, 1 baño completo, 1 centro de lavado y terraza.",
	    			"m2": "82"
	    		},
	    		{
	    			"order":9,
	    			"modelo":"K",
    				"descripcion": "2 recámaras, sala, comedor, cocina, 1 baño completo, 1 centro de lavado y terraza.",
	    			"m2": "82"
	    		},
	    	]
		},
	    {"recamaras": 3,
	    	"tipos": [
	    		{
	    			"order":1,
	    			"modelo":"L",
	    			"descripcion":"3 recámaras, 1 cuarto de servicio con baño, sala, comedor, cocina, sala tv, área de bar, 3 baños completos, 1 medio baño, 1 centro de lavado, 1 bodega y terraza",
	    			"m2":"458"
	    		},
	    		{
	    			"order":2,
	    			"modelo":"M",
	    			"descripcion":"3 recámaras, 1 cuarto de servicio con baño, sala, comedor, cocina, sala tv, área de bar, 3 baños completos, 1 medio baño, 1 centro de lavado, 1 bodega y terraza",
	    			"m2":"458"
	    		},
	    		{
	    			"order":4,
	    			"modelo":"N",
	    			"descripcion":"3 recámaras, 1 cuarto de servicio con baño, sala, comedor, cocina, sala tv, área de bar, 3 baños completos, 1 medio baño, 1 centro de lavado, 1 bodega y terraza",
	    			"m2":"458"
	    		},
	    		{
	    			"order":5,
	    			"modelo":"O",
	    			"descripcion":"3 recámaras, 1 cuarto de servicio con baño, sala, comedor, cocina, sala tv, área de bar, 3 baños completos, 1 medio baño, 1 centro de lavado, 1 bodega y terraza",
	    			"m2":"458"
	    		},
	    		{
	    			"order":6,
	    			"modelo":"P",
	    			"descripcion":"3 recámaras, 1 cuarto de servicio con baño, sala, comedor, cocina, sala tv, área de bar, 3 baños completos, 1 medio baño, 1 centro de lavado, 1 bodega y terraza",
	    			"m2":"458"
	    		},
	    	]
		},
  	];

  	console.log($scope.recamaras);


  	$scope.tipos = [];
  	$scope.showInfo = function(recamara){
  	
	 	$('.plantas-info-container').css('height','100%').addClass('active'); 

	 	$scope.tipos = recamara.tipos;
  	};

  	$scope.showModelInfo = function(modelo){
  		$scope.modelo = modelo;
  		console.log($scope.modelo);
  	};
});