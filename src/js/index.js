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
	$('.banner .banner-po .banner-ul .btn-left').hover(function(){
		$(this).addClass('animated bounceIn');
	},function(){
		$(this).removeClass('animated bounceIn');
	});
	$('.banner .banner-po .banner-ul .btn-right').hover(function(){
		$(this).addClass('animated bounceIn');
	},function(){
		$(this).removeClass('animated bounceIn');
	});
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
		$('.products .pro  .contents .content1').css('left','800px');
		$('.products .pro  .contents .content2').css('left','800px');
		$('.products .pro  .contents .content3').css('left','800px');
		$('.products .pro  .contents .content4').css('left','800px');
		$('.products .pro  .contents .content5').css('left','800px');
		$('.products .pro  .contents .content6').css('left','800px');
	}
//	content_right();
	function content_left(){
		$('.products .pro  .contents .content1').css('left','-800px');
		$('.products .pro  .contents .content2').css('left','-800px');
		$('.products .pro  .contents .content3').css('left','-800px');
		$('.products .pro  .contents .content4').css('left','-800px');
		$('.products .pro  .contents .content5').css('left','-800px');
		$('.products .pro  .contents .content6').css('left','-800px');
	}
	function content1_right(){
		content_right();
		$('.products .pro  .contents .content1').show();
		$('.products .pro  .contents .content1').siblings().hide();
		$('.products .pro  .contents .content1').animate({left:0},600);
		
	}
//	content1_right();
	function content1_left(){
		content_left();
		$('.products .pro  .contents .content1').show();
		$('.products .pro  .contents .content1').siblings().hide();
		$('.products .pro  .contents .content1').animate({left:0},600);
	}
//	content1_left();
	//content2
	function content2_right(){
		content_right();
		$('.products .pro  .contents .content2').show();
		$('.products .pro  .contents .content2').siblings().hide();
		$('.products .pro  .contents .content2').animate({left:0},600);
	}
	function content2_left(){
		content_left();
		$('.products .pro  .contents .content2').show();
		$('.products .pro  .contents .content2').siblings().hide();
		$('.products .pro  .contents .content2').animate({left:0},600);
	}
	//content3
	function content3_right(){
		content_right();
		$('.products .pro  .contents .content3').show();
		$('.products .pro  .contents .content3').siblings().hide();
		$('.products .pro  .contents .content3').animate({left:0},600);
	}
	function content3_left(){
		content_left();
		$('.products .pro  .contents .content3').show();
		$('.products .pro  .contents .content3').siblings().hide();
		$('.products .pro  .contents .content3').animate({left:0},600);
	}
	//content4
	function content4_right(){
		content_right();
		$('.products .pro  .contents .content4').show();
		$('.products .pro  .contents .content4').siblings().hide();
		$('.products .pro  .contents .content4').animate({left:0},600);
	}
	function content4_left(){
		content_left();
		$('.products .pro  .contents .content4').show();
		$('.products .pro  .contents .content4').siblings().hide();
		$('.products .pro  .contents .content4').animate({left:0},600);
	}
	//content5
	function content5_right(){
		content_right();
		$('.products .pro  .contents .content5').show();
		$('.products .pro  .contents .content5').siblings().hide();
		$('.products .pro  .contents .content5').animate({left:0},600);
	}
	function content5_left(){
		content_left();
		$('.products .pro  .contents .content5').show();
		$('.products .pro  .contents .content5').siblings().hide();
		$('.products .pro  .contents .content5').animate({left:0},600);
	}
	//content6
	function content6_right(){
		content_right();
		$('.products .pro  .contents .content6').show();
		$('.products .pro  .contents .content6').siblings().hide();
		$('.products .pro  .contents .content6').animate({left:0},600);
	}
	function content6_left(){
		content_left();
		$('.products .pro  .contents .content6').show();
		$('.products .pro  .contents .content6').siblings().hide();
		$('.products .pro  .contents .content6').animate({left:0},600);
	}
	
	var num = 0;
	$('.products .pro  .contents .content1').show();
	$('.products .pro .pro-img-btn .pro-btn-left').hover(function(){
		$(this).addClass('animated bounceIn');
	},function(){
		$(this).removeClass('animated bounceIn');
	});
	$('.products .pro .pro-img-btn .pro-btn-right').hover(function(){
		$(this).addClass('animated bounceIn');
	},function(){
		$(this).removeClass('animated bounceIn');
	});
	$('.products .pro .pro-img-btn .pro-btn-left').on('click',function(){
		num--;
		if(num < 0){
			num=6-1;
		}
		console.log(num);
		left_change();
	});
	$('.products .pro .pro-img-btn .pro-btn-right').on('click',function(){
		num++;
		if(num >6-1 ){
			num=0;
		}
		console.log(num);
		right_change();
	});
	$('.products .pro .pro-spans  span').on('click',function(){
		ber=$(this).index();
		console.log(ber);
		if(ber>num){
			ber=num;//重新赋值
			right_change();
			
		}else if(ber<num){
			ber=num;
			left_change();
		}
		
	})
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


//business
$(function(){
	var i=$('.business .business-ul').length;
//	console.log(i);
	var show = true;
		hover_btn();
		$('.business .business-ul .btn').on('click',function(){
		$(this).parent().find($('.business .business-ul .art-3')).slideToggle();
		if(show)
		{
			$(this).animate({
				backgroundImage:'url(dist/images/business-btn.png)',
				backgroundPositionY:67,
				transition:'background-position-y 0.3s'
			});
			show = false;
		}else{
			hover_btn();
			$('.business .business-ul .btn').animate({
				backgroundImage:'url(dist/images/business-btn.png)',
				backgroundPositionY:0,
				transition:'background-position-y 0.3s'
			});
			show = true;
		}
	
	});
	//按钮弹得效果函数
	function hover_btn(){
		$('.business .business-ul .btn').hover(function(){
				$(this).addClass('animated bounceIn');
			},function(){
				$(this).removeClass('animated bounceIn');
		});
	}
	//图片弹
	$('.business .business-ul .cimg .img').hover(function(){
			$(this).addClass('animated bounceIn');
		},function(){
			$(this).removeClass('animated bounceIn');
	});
	
	
});


//team 
$(function(){
	var index=0;
	var leng=$('.team .members .member').length;
	$('.team .members .member').eq(0).show();
	$('.team .banner-po .banner-ul .btn-left').on('click',function(){
		clearInterval(auto);
		$('.team .members .member').hide().css('left',1130);
		index--;
		if(index<0){
			index=leng-1;
		}
		
		$('.team .members .member').eq(index).show().animate({
				left:0
			},1000);
		$('.team .members ').push($('.team .members .member').first());
		$('team .banner-po .banner-ul .center .spans span').removeClass('active');
		$('team .banner-po .banner-ul .center .spans span').eq(index).addClass('active');
	});
	$('.team .banner-po .banner-ul .btn-right').on('click',function(){
		clearInterval(auto);
		$('.team .members .member').hide().css('left',-1130);
		index++;
		if(index>leng-1){
			index=0;
		}
		console.log(index);
		$('.team .members .member').eq(index).show().animate({
			left:0
		},1000);
		$('.team .members ').push($('.team .members .member').last());
		$('team .banner-po .banner-ul .center .spans span').removeClass('active');
		$('team .banner-po .banner-ul .center .spans span').eq(index).addClass('active');
	});
	
		

	var auto=setInterval(function(){
		$('.team .members .member').hide().css('left',1130);
		index--;
		if(index<0){
			index=leng-1;
		}
		
		$('.team .members .member').eq(index).show().animate({
				left:0
			},1000);
		$('.team .members ').push($('.team .members .member').first());
		$('team .banner-po .banner-ul .center .spans span').removeClass('active');
		$('team .banner-po .banner-ul .center .spans span').eq(index).addClass('active');
	},2000);
	
	
	
	
	
	var img1=['dist/images/team_img02.png','dist/images/team_amore.png'];
	var img2=['dist/images/team_img03.png','dist/images/team_amore.png']
	$('.team .members .member .left .name .card .teamImg').hover(function(){
		$(this).attr('src',img1[1])
	},function(){
		$(this).attr('src',img1[0])
	})
	$('.team .members .member .right .name .card .teamImg').hover(function(){
		$(this).attr('src',img2[1])
	},function(){
		$(this).attr('src',img2[0])
	})
	$('.team .banner-po .banner-ul .btn-left').hover(function(){
		$(this).addClass('animated bounceIn');
	},function(){
		$(this).removeClass('animated bounceIn');
	})
	$('.team .banner-po .banner-ul .btn-right').hover(function(){
		$(this).addClass('animated bounceIn');
	},function(){
		$(this).removeClass('animated bounceIn');
	})
	
});

//footer
$(function(){
	var music =$('.footer .public .music li div').length;
	
	$('.footer .public .music li div').on('click',function(){
		$(this).attr('src','')
	})
	$('.footer .public .music li div').hover(function(){
		$(this).addClass('animated bounceIn');
	
	},function(){
		$(this).removeClass('animated bounceIn');
	})
})
