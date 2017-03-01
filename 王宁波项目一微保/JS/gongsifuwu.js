$(function(){
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
	
	/*文章*/
	$(".wenzhang_next").click(function(){
		if(k<3){
			json11();
		}
		
	});
	json11();
	var k=0;
	function json11(){
		var xhr = new XMLHttpRequest()
		xhr.open("get","JS/listData.json")
		xhr.send(null)
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					if(k==0){
						$("#artc").html("");
					}
				var result=xhr.responseText;
				var result1=JSON.parse(result);
				var result2=result1[k].data.list;
				for(var i=0;i<result2.length;i++){
					var itm=$("#itemal").html()
					.replace("$imgs$",result2[i].coverImg)
					.replace("$articleId$",result2[i].sysId)
					.replace("$size1$",result2[i].title)
					.replace("$size2$",result2[i].creatAt)
					.replace("$size3$",result2[i].describe);
					$("#artc").append(itm);
				}
				var ati=Math.ceil(result1[k].data.count/result1[k].data.pageSize);
				if(k>=ati-1){
					$(".wenzhang_next").css({opacity:0.4});
					$(".chakangengduo img").attr("src","images/list_gomore_bg_nomore.jpg")
				}
				}
			}
		}
		k++;
		
	}
	
	$("#artc").delegate(".bird_dong_wenzhang_warp_li","click",function(){
		window.open("writings.html?type=xiaoniaoNews"+$(this).attr("articleid"))
	})
	
	/*$(".bird_dong_wenzhang_warp_li").click(function(){
		window.open("writings.html?type=xiaoniaoNews"+$(this).attr("articleid"))
	})*/
	
})
