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
		
		
		tiAo()
	})
	
$("#fooder").load("fooder.html")
	/*单击笔 效果*/
	$(".pen").click(function(){
		setTimeout(function(){
		timer=setTimeout(remove,1000)
		$(".line").addClass("line_now")
		$(".pen").addClass("pen_now")
		},1)
	})
	function remove(){
		$(".line").removeClass("line_now")
		$(".pen").removeClass("pen_now")
		timer=null
	}
	/*随机*/
	$(".suiji").hover(function(){
		$(".chantiao").stop().animate({width:135},300).parent().find(".suiji").addClass("suiji_now1")
	},function(){
		$(".chantiao").stop().animate({width:0},300).parent().find(".suiji").removeClass("suiji_now1")
	})
	var linpr=["再点一下试试~","皇上万岁，万万岁","娘娘吉祥"]
	var gao=false
	var nr=Math.floor(Math.random()*linpr.length)
	$(".suiji").click(function(){
		if(!gao){
			gao=true
			$(".wenzi").find("p").text(linpr[nr]).parent().show().addClass("animated fadeInDownBig")
			if($(".wenzi").find("p").text()!="再点一下试试~"){
			setTimeout(function(){
				$(".wenzi").addClass("animated fadeOutLeftBig")
				$(".suiji").addClass("suiji_now")
			},1000)
			}
		}else if(gao==true&&$(".wenzi").find("p").text()=="再点一下试试~"){
			$(".wenzi").find("p").text("智障，让你点你就点啊")
			setTimeout(function(){
				$(".wenzi").addClass("animated fadeOutLeftBig")
				$(".suiji").addClass("suiji_now")
			},500)
		}
		
	})
	
	
	jiazai();
	function jiazai(){
		if(getUrlParams("type")){
			var retule=articleData[getUrlParams("type")].data;
			$("#bird_dong_h11").text(retule.typeTitle)
			$("#bird_liebiao_size").text(retule.title)
			$("#sj").text(retule.updateAt)
			$("#tu1").attr("src",retule.coverImg)
			$("wenzhang_nr").text(retule.content)
			$("tit").text(retule.content)
		}
	}
	
	function getUrlParams(name){
		var reg= new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r!=null){
			return r[2]
		}else{
		    return"";
		   }
	}


})