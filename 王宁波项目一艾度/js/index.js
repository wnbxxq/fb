/**
 * Created by dabo on 2016/11/14.
 */
$(function(){
    $('#header').load('header.html');
    $('#footer').load('footer.html')
})
$(function(){
        var w=$(window).width();
        $('.img1').css({width:w})
        var a=0;
        var i=1;
       var isTis=true;
        $('.banner-box ul li').click(function(){
            a=$(this).index();
            i++;
            $('.img1').eq(a).animate({height:0,zIndex:i},0,function(){
                $('.img1').eq(a).stop().animate({height:500},600);
            });
            $(this).css({background:"black"}).siblings().css({background:"#656565"})
        });
        $('.left').click(function(){
            a--;
            if(a<0){
                a=$('.banner-box ul li').index();
            }
            i++;
            $('.img1').eq(a).css({left:-w,zIndex:i})
            $('.img1').eq(a).stop().animate({left:50+"%"},1000);
            $('.banner-box ul li').eq(a).css({background:"black"}).siblings().css({background:"#656565"})
        })
        $('.right').click(function(){
            a++;
            if(a>$('.banner-box ul li').index()){
                a=0;
            }
            i++;
            $('.img1').eq(a).css({zIndex:i,left:2*w});
            $('.img1').stop().animate({left:50+"%"},1000);
            $('.banner-box ul li').eq(a).css({background:"black"}).siblings().css({background:"#656565"})
        })


        $(window).scroll(function(){
        var top=$(window).scrollTop();
        if(top>160){
            $('.rab1').addClass("animated fadeInLeft");
            $('.rab1-p').addClass("animated fadeInRight");
        } ;
        if(top>500){
            $('.rab2').addClass("animated fadeInLeft");
            $('.rab2-p').addClass("animated fadeInRight");
        };
        if(top>1433){
            $('.rab3').addClass("animated fadeInLeft");
            $('.p1').addClass("animated fadeInRight");
        };
        if(top>1677){
            $('.computer,.airplan').addClass("animated fadeInLeft");
            $('.photo,.bag').addClass("animated fadeInRight");
        };
        if(top>2083){
            $('.rab4').addClass("animated fadeInLeft");
            $('.forth-p').addClass("animated fadeInRight");
        }
        if(top>2399){
            $('.write1,.write2,.write3,.write4').addClass("animated fadeInLeft");
            $('.write5').addClass("animated fadeInRight");
        };
        if(top>2903){
            $('.rab5').addClass("animated fadeInLeft");
            $('.rab5-p').addClass("animated fadeInRight");
        };

        if(top>3601){
            $('.biao').addClass("animated bounceInUp");
        };

        $('.rab5').click(function(){
            alert(top)
        })
    });
//·µ»Ø¶¥²¿
    $(window).scroll(function(){
        if($(window).scrollTop()>800){
            $('.return').fadeIn()
        }else{
            $('.return').fadeOut()
        }
    });
    $(".return").css({backgroundPosition:-145+'px '+-5+'px'})
    $('.return').click(function(){
        $(".return").css({backgroundPosition:-294+'px '+-5+'px'})
        $('body,html').animate({scrollTop:0},800)
        $('.return').animate({bottom:1200},1000,function(){
            $('.return').animate({bottom:30},0)
            $(".return").css({backgroundPosition:-145+'px '+-5+'px'})
        })
    })
})