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
		
		zixUn()
	})
	function tiAo(){
		$(".side_li").eq(i).addClass("li_now").siblings().removeClass("li_now");
		$(".fangkuai").eq(i).addClass("fangkuai_now").parent().siblings().find(".fangkuai").removeClass("fangkuai_now");
		$(".side_p").eq(i).addClass("p_now").parent().siblings().find(".side_p").removeClass("p_now");
		$(".fenlei_rig").eq(i).addClass("fenlei_rig_now").siblings().removeClass("fenlei_rig_now");
	}
	$(".yiru_xiala_li").click(function(){
		
		i=$(this).index()
		tiAo()
	})
	/*底部*/
	$("#fooder").load("fooder.html")
	
	/*切换*/
	var i=0
	function tiAo(huao){
		$(".side_li").eq(i).addClass("li_now").siblings().removeClass("li_now");
		$(".fangkuai").eq(i).addClass("fangkuai_now").parent().siblings().find(".fangkuai").removeClass("fangkuai_now");
		$(".side_p").eq(i).addClass("p_now").parent().siblings().find(".side_p").removeClass("p_now");
		$(".fenlei_rig").eq(i).addClass("fenlei_rig_now").siblings().removeClass("fenlei_rig_now");
	    $(".fenlei_rig").eq(i).find("p,span,img,li").removeClass("bounceInRight bounceInLeft").addClass("animated "+huao)
	}
	var fenlei=0
	$(".side_li").click(function(){
		i=$(this).index();
		var bb = i>fenlei?"bounceInRight":"bounceInLeft";
            fenlei=i;
	    tiAo(bb)
	})
	
	
	
	/*产品随屏幕走*/
	$(window).scroll(function(){
		if($(window).scrollTop()>=300){
			$(".fenlei_let").addClass("fenlei_let_now").animate({top:120},0)
		}else{
			$(".fenlei_let").removeClass("fenlei_let_now")
		}
	})
	/*hash 跳转*/
	var hash1=window.location.hash.substring(1);
	/*alert(hash1);*/
	if(hash1){
		i=hash1;
		tiAo()
		$(".chanpin1").addClass("p1_now").parent().siblings().find(".p1").removeClass("p1_now");
		window.location.hash=""
	}
	$(".yiru_xiala_li1").click(function(){
		i=$(this).index()
		tiAo()
	})
	
	
})
