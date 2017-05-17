//bird导航栏

$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['fullpage2', 'fullpage3', 'fullpage4', 'fullpage5', 'fullpage6'],
		menu: '#Menu'
	});
});

//滚动条

$(function(){
	$('.fullpage5 .birdPublic .btn .btn_left').on('click',function(){
		$('.fullpage5 .birdPublic .cloud02').animate({left:'1000px'},500,function(){
			$('.fullpage5 .birdPublic .cloud01').animate({left:'0'},500);
		});
	})
	$('.fullpage5 .birdPublic .btn .btn_right').on('click',function(){
//		$(this).addClass('active');
		$('.fullpage5 .birdPublic .cloud01').animate({left:'-1000px'},500,function(){
			$('.fullpage5 .birdPublic .cloud02').animate({left:'0'},500);
		})
	})
});
