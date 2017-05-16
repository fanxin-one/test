//bird导航栏
$(function(){
	$('.birdheader .birdNav .nav .nav-li a ').hover(function(){
		$(this).find('.nav-span').animate({
			top:'30px',
			left:'50px'
		},500);
		
	},function(){
		$(this).find('.nav-span').animate({
			top:'0px',
			left:'0px'
		},500,function(){
			$(this).hide();
		});
	})
	
});
//概述部分
$(function(){
	var index=0;
	$('.section .ov01').show();
	$('.section  .birdPublic .btn02-left').on('click',function(){
		btn_left();
		switch(index){
			case 0:
//			$('.section .ov02').css({
//				display:'block',
//				left:'292px'
//			});
			break;
			
		}
	})
	$('.section  .birdPublic .btn02-right').on('click',function(){
		alert(2);
	})
	function btn_left(){
		$('.section .ov02').css('left','850px');
		$('.section .ov03').css('left','850px');
		$('.section .ov01').css('left','850px');
	}
	function btn_right(){
		$('.section .ov02').css('left','0px');
		$('.section .ov03').css('left','0px');
		$('.section .ov01').css('left','0px');
	}
});
