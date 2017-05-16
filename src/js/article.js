$(function(){
	$('.contact-wrap .public .wrap .iflike').hover(function(){
		$(this).addClass('animated bounceIn');
		$('.contact-wrap .public .wrap .iflike .like').css('right','-135px');
	},function(){
		$(this).removeClass('animated bounceIn');
	});
})