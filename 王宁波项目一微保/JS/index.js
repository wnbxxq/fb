$(function(){
	/*头部*/
	$("#header").load("header.html")
	/*banner轮播*/
	/*点击事件*/
	var i=0
	var timer=null
	var len_ban=$(".banner_tu").length
	$(".banner_yuan").click(function(){
		i=$(this).index()
		dianJi()
	})
	
	function dianJi(){
		$(".banner_yuan").eq(i).addClass("banner_yuan_now").siblings().removeClass("banner_yuan_now");
	    $(".banner_tu").eq(i).fadeIn().siblings().fadeOut()
	}
	function lunBo(){
		i++;
		if(i>len_ban-1){
			i=0
		}
		dianJi()
	}
	timer=setInterval(lunBo,3000)
	$(".banner").mouseenter(function(){
		clearInterval(timer)
	})
	$(".banner").mouseleave(function(){
		timer=setInterval(lunBo,3000)
	})
	/*微保业务*//*切换*/
	var q=0
	$(".weibao_shoufei_warp_nav_let").hover(function(){
		$(this).find(".shoufei_nav_bot").addClass("shoufei_nav_bot_now")
		$(this).parent().siblings().find(".shoufei_nav_bot").removeClass("shoufei_nav_bot_now")
		$(this).find("img").addClass("animated tada")
		
		
	},function(){
		$(this).find("img").removeClass("animated tada")
	})
	$(".weibao_shoufei_warp_nav").hover(function(){
	var q=$(this).index();
	$(this).parent().parent().siblings().find(".qiehuan_warp_zh_qiehuan").eq(q).fadeIn(0).siblings().fadeOut(0)
	})
    /*point  bottom值改变*/
	$(".point_area").hover(function(){
		$(this).stop().animate({bottom:0},500).addClass("point_area_now");
		$(this).parent().find(".point_line").fadeOut(0)
	},function(){
		$(this).stop().animate({bottom:-33},500).removeClass("point_area_now");
		$(this).parent().find(".point_line").fadeIn(400)
	})
	/*滑动事件*/
	$(".ronghezhifu_chanpin_warp").mouseenter(function(e) {
                var w = $(this).width();
                var h = $(this).height();
                var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
                var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
                var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
              switch (direction) {
                    case 0:
                            $(this).find(".huadong_warp").css({"top":-220,"left":0});
                            $(this).find(".huadong_warp").stop().animate({"top":0,"left":0});
                        break;
                    case 1:
                            $(this).find(".huadong_warp").css({"top":0,"left":380});
                            $(this).find(".huadong_warp").stop().animate({"top":0,"left":0});
                        break;
                    case 2:
                            $(this).find(".huadong_warp").css({"top":220,"left":0});
                            $(this).find(".huadong_warp").stop().animate({"top":0,"left":0});
                        break;
                    case 3:
                            $(this).find(".huadong_warp").css({"top":0,"left":-380});
                            $(this).find(".huadong_warp").stop().animate({"top":0,"left":0});
                        break;
                }
            });
            
    $(".ronghezhifu_chanpin_warp").mouseleave(function(e) {
                var w = $(this).width();
                var h = $(this).height();
                var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
                var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
                var c = Math.atan2(y, x)
                var direction = Math.round(((( c* (180 / Math.PI)) + 180) / 90) + 3) % 4;
                switch (direction) {
                    case 0:
                            $(this).find(".huadong_warp").css({"top":0,"left":0});
                            $(this).find(".huadong_warp").stop().animate({"top":-220,"left":0});
                        break;
                    case 1:
                            $(this).find(".huadong_warp").css({"top":0,"left":0});
                            $(this).find(".huadong_warp").stop().animate({"top":0,"left":380});
                        break;
                    case 2:
                            $(this).find(".huadong_warp").css({"top":0,"left":0});
                            $(this).find(".huadong_warp").stop().animate({"top":220,"left":0});
                        break;
                    case 3:
                            $(this).find(".huadong_warp").css({"top":0,"left":0});
                            $(this).find(".huadong_warp").stop().animate({"top":0,"left":-380});
                        break;
                }
           })
	$(".ronghezhifu_chanpin_warp").hover(function(){
		$(this).find(".fuse_caption").animate({bottom:-44},400);
	},function(){
		$(this).find(".fuse_caption").animate({bottom:0},400);
	})
	/*微保业务移入事件*/
	$(".xingneng_li").hover(function(){
		$(this).find(".xingneng_li_yincang").stop().fadeIn()
	},function(){
		$(this).find(".xingneng_li_yincang").stop().fadeOut()
	})
	/*底部合作机构*/
	$(".jigou_warp_tu").hover(function(){
		$(this).stop().animate({opacity:1}).siblings().animate({opacity:0.5},0)
		$(this).find("img").removeClass("jigou_tu_heibai")
	},function(){
		$(this).find("img").addClass("jigou_tu_heibai")
		$(".jigou_warp_tu").stop().animate({opacity:1},0)
	})
	/*底部*/
	$("#fooder").load("fooder.html")
	
	
})
