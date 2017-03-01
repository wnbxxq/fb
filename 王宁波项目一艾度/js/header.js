/**
 * Created by dabo on 2016/11/16.
 */
$(function(){
    $('.header-right ul li ').click(function(){
        $(this).addClass('now').siblings().removeClass('now');
    });
    var i=window.location.hash.substring(1);
    $('.header-right ul li ').eq(i).addClass('now').siblings().removeClass('now');
})