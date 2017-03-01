/**
 * Created by dabo on 2016/11/16.
 */
$(function(){
    $('#header').load('header.html');
    $('#footer').load('footer.html')
})
$(function(){
    var oli=$('.first-picter1 ul li');
    oli.click(function(){
       var a=$(this).index();
        $('.first-picter2 img').eq(a).fadeIn().siblings().fadeOut();
        oli.eq(a).css({background:"black"}).siblings().css({background:"#999999"})
    });
    $(".tab div").hover(function(){
        $(this).find(".top-box").stop().animate({left:0},400);
        $(this).find(".imgs").css({opacity:1});
        $(this).find(".title-box").stop().animate({left:-280},400);
        $(this).find(".com-box").stop().animate({left:0},400);
    },function(){
        $(this).find(".top-box").stop().animate({left:-280},400);
        $(this).find(".imgs").css({opacity:0});
        $(this).find(".title-box").stop().animate({left:0},400);
        $(this).find(".com-box").stop().animate({left:-280},400);
    });
})