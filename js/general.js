//trigger functions after the dom is loaded
$(document).ready(function() {
			
			//call full page plugin
			$('#fullpage').fullpage({
			  //links to s sections of the page
			  anchors: ['inicio', 'mazatlan', 'torreeme', 'plantas', 'amenidades','contacto','lastPage'],
			  menu: '.menu',
			  continuousVertical: false,
			  controlArrowColor:'#85cfce'
			  
			  // afterRender: function(){
				  // alert("The resulting DOM stucture is ready");
            	//}
			  
			});			
			
			 //random text display
			 $(".over-txt"+(new Date().getTime() % 5 +1)).css("display", "block");
			 
			 //plantas detalle container open
			 $('.recamara-num-btn').click(function(e){
			 	 e.preventDefault();
				 $('.plantas-info-container').css('height','100%').addClass('active'); 
			 })
			 
			 //plantas detalle container close
			 $('.cerrar-planta-container').click(function(e){
			 	 e.preventDefault();
				 $('.plantas-info-container').css('height','0').removeClass('active');
			 })
			 
});


