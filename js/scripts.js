// Scripts
$(document).ready(function(){
	$('#imageList img').click(function(){
		
		
			$(this).parent().animate({
				'height': '300px'
			}, 1000);
		
		}).mouseleave(function(){
		
			$(this).parent().animate({
				'height': '40px'
			}, 1000);
		

		
	});
});