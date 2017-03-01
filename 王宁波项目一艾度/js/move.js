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
        if(top>666){
        $('.resize7').addClass("animated fadeInRight")
        };
        if(top>1500){
            $('.resize9').addClass("animated fadeInLeft")
        };

        var index;
        $('.mould').hover(function(){
            index=$(this).index()
            $('.body #p1').css({
                top:(Math.floor(index/6))*120+Math.floor(index/6),
                left:index%6*200+index%6});
        })
        $(".body").hover(function(){
            $('.body #p1').show(0);
        },function(){
            $('.body #p1').hide(0);
        })
        $('.resize9').click(function(){
            alert(top)
        })
    })
})