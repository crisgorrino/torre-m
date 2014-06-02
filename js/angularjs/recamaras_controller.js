
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
	    			"m2":"79",
	    			"img":"tipo-a.jpg",
	    			"pdf":"118.pdf"
	    		},
	    		{
	    			"order":2,
	    			"modelo":"B",
	    			"descripcion": "1 recámara, sala, comedor, cocina, 1 baño completo, 1 centro de lavado, 1 bodega y terraza.",
	    			"m2":"82",
	    			"img":"tipo-b.jpg",
	    			"pdf":"118.pdf"
	    		},
	    		{
	    			"order":3,
	    			"modelo":"D",
	    			"descripcion" : "1 recámara, sala, comedor, cocina, 1 baño completo, 1 centro de lavado y terraza.",
	    			"m2":"83",
	    			"img":"tipo-d.jpg",
	    			"pdf":"118.pdf"
	    		},
	    	]
	    },
	    {"recamaras": 2, 
	    	"tipos": [
	    		{
	    			"order":1,
	    			"modelo":"C",
	    			"descripcion": "2 recámaras, sala, comedor, cocina, 1 baño completo, 1 centro de lavado y terraza.",
	    			"m2": "82",
	    			"img":"tipo-c.jpg",
	    			"pdf":"118.pdf"
	    		},
	    		{
	    			"order":2,
	    			"modelo":"E",
    				"descripcion": "2 recámaras, sala, comedor, cocina, 1 baño completo, 1 centro de lavado y terraza.",
	    			"m2": "82",
	    			"img":"tipo-c.jpg",
	    			"pdf":"118.pdf"
	    		},
	    		{
	    			"order":3,
	    			"modelo":"F",
    				"descripcion": "2 recámaras, sala, comedor, cocina, 1 baño completo, 1 centro de lavado y terraza.",
	    			"m2": "82",
	    			"img":"tipo-c.jpg",
	    			"pdf":"118.pdf"
	    		},
	    		{
	    			"order":4,
	    			"modelo":"G",
    				"descripcion": "2 recámaras, sala, comedor, cocina, 1 baño completo, 1 centro de lavado y terraza.",
	    			"m2": "82",
	    			"img":"tipo-c.jpg",
	    			"pdf":"118.pdf"
	    		},
	    		{
	    			"order":5,
	    			"modelo":"H",
    				"descripcion": "2 recámaras, sala, comedor, cocina, 1 baño completo, 1 centro de lavado y terraza.",
	    			"m2": "82",
	    			"img":"tipo-c.jpg",
	    			"pdf":"118.pdf"
	    		},
	    		{
	    			"order":6,
	    			"modelo":"I",
    				"descripcion": "2 recámaras, sala, comedor, cocina, 1 baño completo, 1 centro de lavado y terraza.",
	    			"m2": "82",
	    			"img":"tipo-c.jpg",
	    			"pdf":"118.pdf"
	    		},
	    		{
	    			"order":7,
	    			"modelo":"I2",
    				"descripcion": "2 recámaras, sala, comedor, cocina, 1 baño completo, 1 centro de lavado y terraza.",
	    			"m2": "82",
	    			"img":"tipo-c.jpg",
	    			"pdf":"118.pdf"
	    		},
	    		{
	    			"order":8,
	    			"modelo":"J",
    				"descripcion": "2 recámaras, sala, comedor, cocina, 1 baño completo, 1 centro de lavado y terraza.",
	    			"m2": "82",
	    			"img":"tipo-c.jpg",
	    			"pdf":"118.pdf"
	    		},
	    		{
	    			"order":9,
	    			"modelo":"K",
    				"descripcion": "2 recámaras, sala, comedor, cocina, 1 baño completo, 1 centro de lavado y terraza.",
	    			"m2": "82",
	    			"img":"tipo-c.jpg",
	    			"pdf":"118.pdf"
	    		},
	    	]
		},
	    {"recamaras": 3,
	    	"tipos": [
	    		{
	    			"order":1,
	    			"modelo":"L",
	    			"descripcion":"3 recámaras, 1 cuarto de servicio con baño, sala, comedor, cocina, sala tv, área de bar, 3 baños completos, 1 medio baño, 1 centro de lavado, 1 bodega y terraza",
	    			"m2":"458",
	    			"img":"tipo-p.jpg",
	    			"pdf":"118.pdf"
	    		},
	    		{
	    			"order":2,
	    			"modelo":"M",
	    			"descripcion":"3 recámaras, 1 cuarto de servicio con baño, sala, comedor, cocina, sala tv, área de bar, 3 baños completos, 1 medio baño, 1 centro de lavado, 1 bodega y terraza",
	    			"m2":"458",
	    			"img":"tipo-p.jpg",
	    			"pdf":"118.pdf"
	    		},
	    		{
	    			"order":4,
	    			"modelo":"N",
	    			"descripcion":"3 recámaras, 1 cuarto de servicio con baño, sala, comedor, cocina, sala tv, área de bar, 3 baños completos, 1 medio baño, 1 centro de lavado, 1 bodega y terraza",
	    			"m2":"458",
	    			"img":"tipo-p.jpg",
	    			"pdf":"118.pdf"
	    		},
	    		{
	    			"order":5,
	    			"modelo":"O",
	    			"descripcion":"3 recámaras, 1 cuarto de servicio con baño, sala, comedor, cocina, sala tv, área de bar, 3 baños completos, 1 medio baño, 1 centro de lavado, 1 bodega y terraza",
	    			"m2":"458",
	    			"img":"tipo-p.jpg",
	    			"pdf":"118.pdf"
	    		},
	    		{
	    			"order":6,
	    			"modelo":"P",
	    			"descripcion":"3 recámaras, 1 cuarto de servicio con baño, sala, comedor, cocina, sala tv, área de bar, 3 baños completos, 1 medio baño, 1 centro de lavado, 1 bodega y terraza",
	    			"m2":"458",
	    			"img":"tipo-p.jpg",
	    			"pdf":"118.pdf"
	    		},
	    	]
		},
  	];

  	console.log($scope.recamaras);


  	$scope.tipos = [];
  	$scope.showInfo = function(recamara){
  	
	 	$('.plantas-info-container').css('height','100%').addClass('active'); 

	 	$scope.tipos = recamara.tipos;

	 	$scope.showModelInfo(recamara.tipos[0]);
  	};

  	$scope.showModelInfo = function(modelo){
  		$scope.modelo = modelo;
  		console.log($scope.modelo);
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