$(document).ready(function() {
			
			$('#fullpage').fullpage({
			  //slidesColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
			  anchors: ['inicio', 'mazatlan', 'torreeme', 'plantas', 'amenidades','contacto','lastPage'],
			  menu: '.menu',
			  continuousVertical: false,
			  controlArrowColor:'#85cfce'
			});			
			
			 //random text display
			 $(".over-txt"+(new Date().getTime() % 5 +1)).css("display", "block");
			 
			 //plantas detalle container toggle
			 $('.recamara-num-btn').click(function(e){
			 	 e.preventDefault();
				 $('.plantas-info-container').css('height','100%').addClass('active'); 
			 })
			 
			 $('.cerrar-planta-container').click(function(e){
			 	 e.preventDefault();
				 $('.plantas-info-container').css('height','0').removeClass('active');
			 })
			 
});


