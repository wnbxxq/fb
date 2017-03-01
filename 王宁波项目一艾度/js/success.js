/**
 * Created by dabo on 2016/11/16.
 */
$(function(){
    $('#header').load('header.html');
    $('#footer').load('footer.html')
});
$(function(){
   var len=$('.third img').length;
    var i=0;
    var iS=true;

   $('.right').click(function(){
       if(iS){
           iS=false;
           i++;
           $('.third').animate({left:-223*i},600,function(){
               if(i==len-4){
                   $('.third').css({left:0},0);
                   i=0;
               }
               iS=true;
           })
       }
   });
    $('.left').click(function(){
        if(iS){
            iS=false;
            i--;
            if(i<0){
                $('.third').css({left:-223*8},0);
                i=len-5;
            }
            $('.third').animate({left:-223*i},600,function(){
                iS=true;
            })
        }
    });

    //ÆÙ²¼Á÷
    var k=0;
    function laogao(){
        var xhr=new XMLHttpRequest();
        xhr.open("get","../js/successData.json");
        xhr.send(null);
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    if(k==0){
                        $('#articleList').html("");
                    }
                    var result=xhr.responseText;
                    var result1=JSON.parse(result);
                    var result2=result1[k].data.list;
                    for(var i=0;i<result2.length;i++){
                        var item=$('#it').html()
                            .replace('$tupian$',result2[i].coverImg)
                        $('#articleList').append(item);
                    }
                    var ati=Math.ceil(result1[k].data.count/result1[k].data.pageSize);

                    if(k>=ati-1){
                        $('.lis').css({opacity:0.3});
                        $('.list').attr("src","../images/list_gomore_bg_nomore.jpg");
                    }
                    k++;
                }
            }
        }
    }
    laogao();
    $('.lis').click(function(){
        laogao();
    })
})
