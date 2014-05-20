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
		});


