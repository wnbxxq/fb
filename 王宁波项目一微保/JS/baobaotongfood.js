$(function(){
	/*返回顶部*/
		$(window).scroll(function(){
			if($(window).scrollTop()>400){
					$(".fanhuitop").fadeIn()
				}else{
					$(".fanhuitop").fadeOut()
				}
		})
		$(".fanhuitop_top").click(function(){
			$("html,body").animate({scrollTop:0},600)
		})
		$(".fanhuitop_youxiang").hover(function(){
			$(".fanhuitop_youxiang").animate({width: 253},500).addClass("animated headShake")
		},function(){
			$(".fanhuitop_youxiang").animate({width: 87},500).removeClass("animated headShake")
		})
})
