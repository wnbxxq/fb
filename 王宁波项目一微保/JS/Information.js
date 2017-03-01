$(function(){
	/*头部*/
	/*头部固定定位*/
	if($(window).scrollTop()>=32){
		$(".head_middle").css({top:0})
		}else{
			$(".head_middle").css({top:32})
		}
	$(window).scroll(function(){
		if($(window).scrollTop()>=32){
		$(".head_middle").css({top:0})
		}else{
			$(".head_middle").css({top:32})
		}
	});
	
	/*头部点击*/
	$(".clearfix_nav_h1").click(function(){
		$(this).find(".p1").addClass("p1_now").parent().siblings().find(".p1").removeClass("p1_now");
	})
	/*头部点击切换*/
	function zixUn(){
		$(".side_li").eq(z).addClass("li_now").siblings().removeClass("li_now");
		$(".fangkuai").eq(z).addClass("fangkuai_now").parent().siblings().find(".fangkuai").removeClass("fangkuai_now");
		$(".side_p").eq(z).addClass("p_now").parent().siblings().find(".side_p").removeClass("p_now");
		$(".zixun_rig").eq(z).addClass("zixun_rig_now").siblings().removeClass("zixun_rig_now");
	}
	$(".yiru_xiala_li1").click(function(){
		z=$(this).index()
		zixUn()
	})
	function tiAo(){
		$(".side_li").eq(i).addClass("li_now").siblings().removeClass("li_now");
		$(".fangkuai").eq(i).addClass("fangkuai_now").parent().siblings().find(".fangkuai").removeClass("fangkuai_now");
		$(".side_p").eq(i).addClass("p_now").parent().siblings().find(".side_p").removeClass("p_now");
		$(".fenlei_rig").eq(i).addClass("fenlei_rig_now").siblings().removeClass("fenlei_rig_now");
	}
	$(".yiru_xiala_li").click(function(){
		
		
		tiAo()
	})
	/*底部*/
	$("#fooder").load("fooder.html")
	
	/*产品随屏幕走*/
	$(window).scroll(function(){
		if($(window).scrollTop()>=300){
			$(".zixun_let").addClass("zixun_let_now").animate({top:120},0)
		}else{
			$(".zixun_let").removeClass("zixun_let_now")
		}
	})
	
	/*切换*/
	var z=0
	function zixUn(dong){
		$(".side_li").eq(z).addClass("li_now").siblings().removeClass("li_now");
		$(".fangkuai").eq(z).addClass("fangkuai_now").parent().siblings().find(".fangkuai").removeClass("fangkuai_now");
		$(".side_p").eq(z).addClass("p_now").parent().siblings().find(".side_p").removeClass("p_now");
		$(".zixun_rig").eq(z).addClass("zixun_rig_now").siblings().removeClass("zixun_rig_now");
	    $(".zixun_rig").eq(z).find("p,span,img,li,h6").removeClass("bounceInRight bounceInLeft").addClass("animated "+dong)
	    $(".wenzhang").removeClass("wenzhang_now")
	}
	var fenlei=0
	$(".side_li").click(function(){
		$(".news_ul").removeClass("wenzhang_out");
		$(".zixun_xinwen").removeClass("wenzhang_out");
		$(".wanzhang").removeClass("wenzhang_now")
		z=$(this).index();
		var zixun = z>fenlei?"bounceInRight":"bounceInLeft";
            fenlei=z;
	    zixUn(zixun)
	})
	/*hash 跳转*/
	var hash2=window.location.hash.substring(1);
	if(hash2){
		z=hash2;
		zixUn()
		window.location.hash=""
	}
	$(".yiru_xiala_li1").click(function(){
		zixUn()
	})
	/*li点击*/
	$(".news_li").click(function(){
		var q=$(this).index();
		$(".wenzhang").eq(q).addClass("wenzhang_now").siblings().removeClass("wenzhang_now")
		$(".news_ul").addClass("wenzhang_out");
		$(".zixun_xinwen").addClass("wenzhang_out")
	})
})
