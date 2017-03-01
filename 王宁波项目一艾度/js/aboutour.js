/**
 * Created by dabo on 2016/11/16.
 */
$(function(){
    $('#header').load('header.html');
    $('#footer').load('footer.html')
});
$(function(){
    $(window).scroll(function(){
        var top=$(window).scrollTop();
        if(top>234){
        $('.about1').addClass("animated fadeInRight")
        };
        if(top>853){
            $('.third3').addClass('animated bounceInDown')
        };
        if(top>0){
            $('.feng').addClass('animated bounceInLeft')
        };
        $(".feng").click(function(){
            alert(top)
        })
    });

})