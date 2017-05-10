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
		console.log(index);
		bannerBg();
	});
	$('.banner .banner-po .banner-ul .btn-right').on('click',function(){
		index++;
		if(index>img.length-1){
			index = 0;
		}
		console.log(index);
		bannerBg();
		
	});
	$('.banner .banner-po .banner-ul .center .spans span').on('click',function(){
		index = $(this).index();//index()在jquery里面是一个方法；写上（）；
		console.log(index);
		bannerBg();
	})
	function bannerBg(){
		$('.banner .bannerImg').attr('src',img[index]);
		$('.banner .banner-po .banner-ul .center .spans span').removeClass('active');
		$('.banner .banner-po .banner-ul .center .spans span').eq(index).addClass('active');
	}
	
	
});