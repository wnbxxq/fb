/**
 * Created by dabo on 2016/12/22.
 */
Ext.onReady(function(){
    var w=$(window).width()-9;
    $(".hide").css({width:w});
    $(window).resize(function(){
      w=$(window).width()-9;
      $(".hide").css({width:w});
    })

    $("#exit").click(function(){
      quit();
    });
    $("#alertw").click(function(){
      checkpwd();
    });
  returnInfo();

//link跳转，
  $(".system").delegate("p","click",function(){     //delegate  事件委托
    if($(this).attr("link")){
      var iLink=$(this).attr("link");
      var oLiId=$(this).attr("id");
      loadPage(iLink,oLiId,"")
    }
  })
  loadHashPage();
  });

function loadHashPage(){
  if(window.location.hash){
    var hashId=window.location.hash.substring(1);
    if(hashId.length>0){
      $("#"+hashId).trigger("click")  //把本次点击事件记住，当下次点击事件发生才忘记本次事件。
    }else{
      loadPage("houtai3.html","","")
    }
  }else{
    loadPage("houtai3.html","","")
  }
}

//利用动态参数进行跳转
function loadPage(link, id, pathName){
  var h = $(window).height()-105;
  $("#frameBox").html("<iframe id='myIframe' src='"+link+"' width='100%' height='" + h + "'frameborder='0'></iframe>");
  window.location.hash = id    //地址栏的id
}

//调整iframe的高度
$(window).resize(function(){
  $("#myIframe").height($(window).height()-105)
});



//获取用户信息  小默默
function returnInfo(){
  $.ajax({
    url:"/Handler/AdminHandler.ashx?action=returnuserinfo",
    type:"post",
    dataType:"json",
    data:"",
    async:false,
  }).done(function(result){
    //console.log(result)
    $("#userName").html(result.turename)
  })
};
//退出
function quit(){
  $.ajax({
    url:"/Handler/AdminHandler.ashx?action=quit",
    type:"get",
    dataType:"json",
    data:"",
    async:false,
  }).done(function(result){
    if(result.success){
      window.location="jiemian.html"
    }
  })
}

//修改密码
function checkpwd(){
  var GLOBAL=GLOBAL||{}
 GLOBAL.BasicWin=new Ext.custom.basicWindow({
    title:"修改密码",  //左上角标题
    width:500,
    height:320,
   //minitextfield 小型输入框   textfield 默认输入框 middletextfield中兴输入框  big
    items:[
      new Ext.custom.middletextfield({
        itemId:"oldPwd",
        fieldLabel:"当前密码",
        beforeLabelTextTpl:required,
        margin:"10 10 10 50",
      }),new Ext.custom.middletextfield({
        itemId:"newPwd",
        fieldLabel:"新密码",
        beforeLabelTextTpl:required,
        margin:"10 10 10 50",
      }),new Ext.custom.middletextfield({
        itemId:"checkPwd",
        fieldLabel:"确认密码",
        beforeLabelTextTpl:required,
        margin:"10 10 10 50",
      }),{
        xtype:"button",
        width:100,
        height:34,
        text:"确定",
        margin:"10 40 0 120",
        handler:function(){
          var data={
            userPwd:GLOBAL.BasicWin.down("#oldPwd").getValue(),
            newPwd:GLOBAL.BasicWin.down("#newPwd").getValue(),
            checkPwd:GLOBAL.BasicWin.down("#checkPwd").getValue(),
          }
          if(data.userPwd==""|| data.newPwd==""|| data.newPwd==data.userPwd||data.newPwd!=data.checkPwd){
            if(data.userPwd==""){
              Ext.Msg.alert("提示","当前密码不能为空")
            }else if(data.newPwd==""){
              Ext.Msg.alert("提示","新密码不能为空")
            }else if(data.userPwd==data.newPwd){
              Ext.Msg.alert("提示","新密码和旧密码不能一致")
            }else if(data.newPwd!=data.checkPwd){
              Ext.Msg.alert("提示","两次输入密码不一致，请重新输入")
            }
          }else{
            $.ajax({
              url:"/Handler/AdminHandler.ashx?action=updatepass",
              type:"post",
              async:false,
              dataType:"json",
              data:data,
            }).done(function(result){
               alert(result.success)
              GLOBAL.BasicWin.hide()
            })
          }
        }
      },{
        xtype:"button",
        width:100,
        height:34,
        text:"取消",
        margin:"10 0 0 0",
        style:"background:green",
        handler:function(){
          GLOBAL.BasicWin.hide()
        }
      }
    ]
  }).show()
}




