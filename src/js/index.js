//header.js
$(function(){
	$('.header .nav .list ').hover(function(){
		$(this).children('.lis').stop().slideDown(600);
	},function(){
		$(this).children('.lis').slideUp(100);
	})
});



//banner
$(function(){
	var img = ['dist/images/banner01_bg.jpg','dist/images/banner02_bg.jpg','dist/images/banner01_bg.jpg']
	var index = 0;
	
	$('.banner .banner-po .banner-ul .btn-left').on('click',function(){
		index--;
		if(index<0){
			index = img.length-1;
		}
//		console.log(index);
		bannerBg();
	
	});
	$('.banner .banner-po .banner-ul .btn-right').on('click',function(){
		index++;
		if(index>img.length-1){
			index = 0;
		}
//		console.log(index);
		bannerBg();
		
		
	});
	$('.banner .banner-po .banner-ul .center .spans span').on('click',function(){
		index = $(this).index();//index()在jquery里面是一个方法；写上（）；
//		console.log(index);
		bannerBg();
	})
	function bannerBg(){
		switch(index)
		{
			case 0:
				imgs_1();
				break;
			case 1:
				imgs_2();
				break;
			default:
				imgs_3();
				break;
			
		}
		$('.banner .bannerImg').attr('src',img[index]);
		$('.banner .banner-po .banner-ul .center .spans span').removeClass('active');
		$('.banner .banner-po .banner-ul .center .spans span').eq(index).addClass('active');
	}
	function imgs_1(){
		$('.banner .imgs .imgs_1').show();
		$('.banner .imgs .imgs_1').siblings().hide();
		$('.banner .imgs .imgs_1 .img1').animate({left:'36%'},500);
		$('.banner .imgs .imgs_1 .img2').animate({right:'25%'},500);
		$('.banner .imgs .imgs_2 .img4').css({left:'0%'});
		$('.banner .imgs .imgs_2 .img5').css({right:'0%'});
		$('.banner .imgs .imgs_3 .img7').css({left:'0%'});
		$('.banner .imgs .imgs_3 .img8').css({right:'0%'});
	}
	function imgs_2(){
		$('.banner .imgs .imgs_2').show();
		$('.banner .imgs .imgs_2').siblings().hide();
		$('.banner .imgs .imgs_2 .img4').animate({left:'7%'},500);
		$('.banner .imgs .imgs_2 .img5').animate({right:'60%'},500);
		$('.banner .imgs .imgs_1 .img1').css({left:'0%'});
		$('.banner .imgs .imgs_1 .img2').css({right:'0%'});
		$('.banner .imgs .imgs_3 .img7').css({left:'0%'});
		$('.banner .imgs .imgs_3 .img8').css({right:'0%'});
	}
	function imgs_3(){
		$('.banner .imgs .imgs_3').show();
		$('.banner .imgs .imgs_3').siblings().hide();
		$('.banner .imgs .imgs_3 .img7').animate({left:'40%'},500);
		$('.banner .imgs .imgs_3 .img8').animate({right:'30%'},500);
		$('.banner .imgs .imgs_1 .img1').css({left:'0%'});
		$('.banner .imgs .imgs_1 .img2').css({right:'0%'});
		$('.banner .imgs .imgs_2 .img4').css({left:'0%'});
		$('.banner .imgs .imgs_2 .img5').css({right:'0%'});
		
	}
		$('.banner .imgs .imgs_1').show();
		$('.banner .imgs .imgs_1').siblings().hide();
		$('.banner .imgs .imgs_1 .img1').animate({left:'36%'},500);
		$('.banner .imgs .imgs_1 .img2').animate({right:'25%'},500);
	
	
	
});


//products 
$(function(){
	function content_right(){
		$('.products .pro  .contents .content1').css('right','-1040px');
		$('.products .pro  .contents .content2').css('right','-1040px');
		$('.products .pro  .contents .content3').css('right','-1040px');
		$('.products .pro  .contents .content4').css('right','-1040px');
		$('.products .pro  .contents .content5').css('right','-1040px');
		$('.products .pro  .contents .content5').css('right','-1040px');
	}
//	content_right();
	function content_left(){
		$('.products .pro  .contents .content1').css('left','-1040px');
		$('.products .pro  .contents .content2').css('left','-1040px');
		$('.products .pro  .contents .content3').css('left','-1040px');
		$('.products .pro  .contents .content4').css('left','-1040px');
		$('.products .pro  .contents .content5').css('left','-1040px');
		$('.products .pro  .contents .content5').css('left','-1040px');
	}
	function content1_right(){
		content_right();
		$('.products .pro  .contents .content1').fadeIn();
		$('.products .pro  .contents .content1').siblings().hide();
		$('.products .pro .contents .content1').animate({right:0},1000);
	}
	content1_right();
	function content1_left(){
		content_right();
		$('.products .pro  .contents .content1').fadeIn();
		$('.products .pro  .contents .content1').siblings().hide();
		$('.products .pro .contents .content1').animate({left:0},1000);
	}
//	content1_left();
	//content2
	function content2_right(){
		content_right();
		$('.products .pro  .contents .content2').fadeIn();
		$('.products .pro  .contents .content2').siblings().hide();
		$('.products .pro  .contents .content2').animate({right:0},1000);
	}
	function content2_left(){
		content_right();
		$('.products .pro  .contents .content2').fadeIn();
		$('.products .pro  .contents .content2').siblings().hide();
		$('.products .pro  .contents .content2').animate({left:0},1000);
	}
	//content3
	function content3_right(){
		content_right();
		$('.products .pro  .contents .content3').fadeIn();
		$('.products .pro  .contents .content3').siblings().hide();
		$('.products .pro  .contents .content3').animate({right:0},1000);
	}
	function content3_left(){
		content_right();
		$('.products .pro  .contents .content3').fadeIn();
		$('.products .pro  .contents .content3').siblings().hide();
		$('.products .pro  .contents .content3').animate({left:0},1000);
	}
	//content4
	function content4_right(){
		content_right();
		$('.products .pro  .contents .content4').fadeIn();
		$('.products .pro  .contents .content4').siblings().hide();
		$('.products .pro  .contents .content4').animate({right:0},1000);
	}
	function content4_left(){
		content_right();
		$('.products .pro  .contents .content4').fadeIn();
		$('.products .pro  .contents .content4').siblings().hide();
		$('.products .pro  .contents .content4').animate({left:0},1000);
	}
	//content5
	function content5_right(){
		content_right();
		$('.products .pro  .contents .content5').fadeIn();
		$('.products .pro  .contents .content5').siblings().hide();
		$('.products .pro  .contents .content5').animate({right:0},1000);
	}
	function content5_left(){
		content_right();
		$('.products .pro  .contents .content5').fadeIn();
		$('.products .pro  .contents .content5').siblings().hide();
		$('.products .pro  .contents .content5').animate({left:0},1000);
	}
	//content6
	function content6_right(){
		content_right();
		$('.products .pro  .contents .content6').fadeIn();
		$('.products .pro  .contents .content6').siblings().hide();
		$('.products .pro  .contents .content6').animate({right:0},1000);
	}
	function content6_left(){
		content_right();
		$('.products .pro  .contents .content6').fadeIn().animate({left:0},1000);
		$('.products .pro  .contents .content6').siblings().hide();
//		$('.products .pro  .contents .content6');
	}
	
	var num = 0;
	$('.products .pro .pro-img-btn .pro-btn-left').on('click',function(){
		num--;
		if(num < 0){
			num=6-1;
		}
		console.log(num);
		left_change()
	});
	$('.products .pro .pro-img-btn .pro-btn-right').on('click',function(){
		num++;
		if(num >6-1 ){
			num=0;
		}
		console.log(num);
		right_change();
	});
	function right_change(){
		switch(num){
			case 0:
				content1_right();
				break;
			case 1:
				content2_right();
				break;
			case 2:
				content3_right();
				break;
			case 3:
				content4_right();
				break;
			case 4:
				content5_right();
				break;
			case 5:
				content6_right();
				break;
		}
		$('.products .pro .pro-spans  span').removeClass('active');
		$('.products .pro .pro-spans  span').eq(num).addClass('active');
	}
	function left_change(){
		switch(num){
			case 0:
				content1_left();
				break;
			case 1:
				content2_left();
				break;
			case 2:
				content3_left();
				break;
			case 3:
				content4_left();
				break;
			case 4:
				content5_left();
				break;
			case 5:
				content6_left();
				break;
		}
		$('.products .pro .pro-spans  span').removeClass('active');
		$('.products .pro .pro-spans  span').eq(num).addClass('active');
	}
})
