$(function(){
	/*头部*/
	$("#header").load("baotongheader.html");
	/*左右轮播布局*/
	var w=$(window).width();
	$(".banner_li").css({width:w});
	$(".banner").css({width:w});
	/*左右轮播*/
	var len_lun=$(".banner_li").length;
	var oUl=$(".banner_ul")
	var oLi=$(".banner_nav_li");
	var i=0;
	var k=0;
	var timer=null;
	var next=$(".next");
	var prev=$(".prev");
	var kuan=$(".banner_li").width()
	oLi.click(function(){
		i=$(this).index();
		oUl.animate({left:-i*kuan},600);
		k=i;
		oLi.eq(k).addClass("banner_nav_li_now").siblings().removeClass("banner_nav_li_now")
	})
	function lunBo(){
		i++
		if(i>len_lun-1){
			i=1
			oUl.animate({left:0},0)
		}
			oUl.animate({left:-i*kuan},600)
		k++;
		if(k>len_lun-2){
			k=0;
		}
		oLi.eq(k).addClass("banner_nav_li_now").siblings().removeClass("banner_nav_li_now")
	}
	timer=setInterval(lunBo,3000)
	$(".banner").mouseover(function(){
		clearInterval(timer)
	})
	$(".banner").mouseout(function(){
		timer=setInterval(lunBo,3000)
	})
	next.click(function(){
		lunBo()
	})
	prev.click(function(){
		i--;
		if(i<0){
			i=len_lun-2
			oUl.animate({left:-kuan*(len_lun-1)},0)
		}
		oUl.stop().animate({left:-i*kuan},600);
		k--;
		if(k<0){
			k=len_lun-2
		}
		oLi.eq(k).addClass("banner_nav_li_now").siblings().removeClass("banner_nav_li_now")
	})
	/*索引导航  鼠标移入盒子滑出*/
	$(".index_fenlei_li").hover(function(){
		$(this).find(".index_fenlei_yincang").stop().animate({left:0},400)
	},function(){
		$(this).find(".index_fenlei_yincang").stop().animate({left:-200},400)
	})
	/*健康险*/
	$(".caichan_nav").hover(function(){
		$(this).find(".caichan_nav_fenlei").hide();
		$(this).find(".caichan_nav_xiala").stop().animate({bottom:0})
	},function(){
		$(this).find(".caichan_nav_fenlei").show();
		$(this).find(".caichan_nav_xiala").stop().animate({bottom:-220})
	})
	/*底部轮播*/
	var timer_bot=null
	$(".next_1").click(function(){
		time_bot()
	})
	$(".prev_1").click(function(){
		$(".hezuohuoban_ul .hezuohuoban_li:first").prependTo(".hezuohuoban_ul");
		$(".hezuohuoban_ul").animate({left:0},0,function(){
			$(".hezuohuoban_ul").animate({left:-1120},1000)
		})
	})
	function time_bot(){
		$(".hezuohuoban_ul .hezuohuoban_li:last").prependTo(".hezuohuoban_ul");
		$(".hezuohuoban_ul").animate({left:-1120},0,function(){
			$(".hezuohuoban_ul").animate({left:0},1000)
		})
	}
	timer_bot=setInterval(time_bot,2000)
	$(".hezuohuoban_tu").mouseover(function(){
		clearInterval(timer_bot)
	})
	$(".hezuohuoban_tu").mouseout(function(){
		timer_bot=setInterval(time_bot,2000)
	})
	/*脚部*/
	$("#fooder").load("baotongfood.html")
	
})
