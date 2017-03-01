angular.module('starter.controllers', [])

  //$ionicPlatform  ionic 中定义功能等的服务，比如说用记录状态时
  //$ionicHistory   相当于js中的history历史记录
  //$state   判断状态值
  //run   用run  必须使用全局作用域
  //.run(function($ionicPlatform, $rootScope, $ionicHistory,$state) {

    //console.log(arguments);
    //var needLoginView = ["myclass","mycomment","myfavorite","myquestion","orderlist"];//需要登录的页面state

    //相当于监听（监听状态值得改变）
    //event  监听事件是否触发
    //toState   当前的状态
    //toparams   数据的转换
    //fromState  上一次的状态

    //$rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams, options){
    //  if(needLoginView.indexOf(toState.name)>=0&&!$rootScope.isLogin){//判断当前是否登录
    //    $state.go("login");//跳转到登录页
    //    event.preventDefault(); //阻止默认事件，即原本页面的加载
    //  }
    //})

  //})


//首页
  .controller('DashCtrl', function($scope,$http,$ionicSlideBoxDelegate) {
    $http({
      url:"/Handler/OfflineCourseHandler.ashx?action=indexshow",
      method:"POST",
      parmas:""
    }).success(function(result){
      //console.log(result);
      $scope.bannerList=result.data.bannerList;
      //时时更新图片
      $ionicSlideBoxDelegate.$getByHandle("slide").update(true)
//无限轮播
      $ionicSlideBoxDelegate.$getByHandle("slide").loop(true)

//好评榜
      $scope.goodList=result.data.goodList;
      $scope.goodLists=[];
      var goodlen=$scope.goodList.length/2;
      for(var i=0;i<goodlen;i++){
        $scope.goodLists.push($scope.goodList.splice(0,2))
      }
      //最新课程
      $scope.newList=result.data.newList;
      $scope.newLists=[];
      var len=$scope.newList.length/2
      for(var i=0;i<len;i++){
        $scope.newLists.push($scope.newList.splice(0,2))
      }
      //猜你喜欢
      $scope.chooseList=result.data.chooseList;
    })
  })

//登录页
  .controller('ClassCtrl', function($scope,$http) {
    $http({
      url:"/Handler/UserHandler.ashx?action=isLogin",
      method:"post",
      params:""
    }).success(function(result){
      console.log(result);
      if(result.success){
        window.location="#/tab/beautiful"
      }
    })
    $scope.loginData={
      name:"",
      pwd:""
    }
    $scope.login=function(){
      var myData={
        userName:$scope.loginData.name,
        userPwd:$scope.loginData.pwd,
      }
      //$http.post("/Handler/UserHandler.ashx?action=login",myData)
      //  .success(function(result){
      //    console.log(result);
      //    if(result.success){
      //     window.loction="#/tab/beautiful"
      //   }
      //  });
      if($scope.loginData.name==""||$scope.loginData.pwd==""){
        alert("用户信息不完整")
      }else{
        $http({
          url:"/Handler/UserHandler.ashx?action=login",
          type:"post",
          //method:"post",  angular最标准的传送方式
          params:myData
        }).success(function(result){
          alert(result.success)
          if(result.success){
            window.location="#/tab/beautiful"
          }
        })
      }
    };
  })
//我的课程页
  .controller('AccountCtrl', function($scope,lessonList,$http,$ionicPopup) {
    $scope.getCourse=lessonList.list();

    $scope.ourCourse=true;
    $scope.ourColor={"color":"blue"};

    //请求我的课程列表
    $scope.myEdit=true;
    $scope.myCourse=function(){
      $scope.myEdit=true;
      $scope.ourCourse=true;
      $scope.collection=false;
      $scope.ourColor={"color":"blue"};
      $scope.cellCless={"color":"black"};

      $scope.mycou=true;
      $http({
        url:"/Handler/OnCourseHandler.ashx?action=mycourse",
        method:"get",
        params:""
      }).success(function(result){
        $scope.myCourseList=result.data
      })
    };
    //请求收藏列表
    $scope.sellClass=function(){
      $scope.myEdit=false;
      $scope.ourCourse=false;
      $scope.collection=true;
      $scope.ourColor={"color":"black"};
      $scope.cellCless={"color":"blue"};

      $http({
        url:"/Handler/OnCourseHandler.ashx?action=mycollection",
        method:"get",
        params:""
      }).success(function(result){
        $scope.getCourse=result.data;
      })
    }
    //删除课程
    $scope.delCourse=function(id){
      $http({
        url:"/Handler/OnCourseHandler.ashx?action=deletecollection",
        method:"post",
        params:{
          courseId:id
        }
      }).success(function(result){
        $ionicPopup.alert({
          title:result.success
        })
        $scope.sellClass();
      })
    }
    //点击编辑
    $scope.classExit=function(){
      $scope.dataDelete=true
    }

    $http({
      url:"/Handler/UserHandler.ashx?action=isLogin",
      method:"post",
      params:"",
    }).success(function(result){
      if(result.success){
        $scope.myCourse();
        $scope.sellClass();
        $scope.dl_tf=false;
      }else{
        $scope.dl_tf=true;
      }
    })

  })

  //详情页控制器
  .controller("StudyCtrl",function($scope){

  })
  //课程列表页
  .controller('ChatsCtrl', function($scope, lessonList,$http,$timeout) {
  $scope.course=lessonList.list()

//下拉
    $scope.listChange=false;
    $scope.listprice=false;
    $scope.show=function(){
      $scope.listChange=! $scope.listChange;
      $scope.listprice=false;
      if($scope.listChange){
        $scope.listColor={"color":"blue"}
        $scope.priceColor={"color":"black"}
      }else{
        $scope.listColor={"color":"black"}
      }
    }
    $scope.priceChange=function(){
      $scope.listprice=!$scope.price;
      $scope.listChange=false;
      if($scope.listprice){
        $scope.priceColor={"color":"blue"}
        $scope.listColor={"color":"black"}
      }else{
        $scope.priceColor={"color":"black"}
      }
    };
    $scope.lessLeft=false;
    $scope.lessRight=false;

    //请求专业分类数据
    $http({
      url:"/Handler/OfflineCourseHandler.ashx?action=getcategory",
      method:"post",
      params:""
    }).success(function(result){
      $scope.profession=result.data;

    })
//价格分类
    $scope.priceList=[
      {id:"0",title:"全部"},
      {id:"1",title:"免费"},
      {id:"2",title:"收费"},
    ]
//课程列表数据
    $scope.moredata=false;  //停止加载数据
    $scope.newPage=0;
    $scope.lists=[];
    $scope.cpriceId="";
    $scope.CategoryId="";

    $scope.goPage=function(pageStart){
      var cousreData={

        searchText:$scope.searchInputText,
        CategoryTwo: $scope.cpriceId,
        CpriceId:$scope.CategoryId,
        pageStart:pageStart?pageStart:1,
      }
      $http({
        url:"/Handler/OfflineCourseHandler.ashx?action=courseshow",
        method:"post",
        params:cousreData,
      }).success(function(result){
        //1.总页数
        $scope.countPage=Math.ceil(result.data.count/result.data.pageStart);
        //console.log($scope.countPage);countPage
        //2.加载列表
        $scope.lists=$scope.lists.concat(result.data.list);
        //console.log($scope.lists);
        $scope.newPage=result.data.pageStart;
        //3.是否到达最后一页
        if($scope.countPage>pageStart){
          $scope.moredata=true;  //开始加载
        }else{
          $scope.moredata=false;
        }
      })
    }
    $scope.moredata=true;
    $scope.loadMore=function(){
      if($scope.moredata){
        $scope.goPage($scope.newPage+1);
        $scope.$broadcast("scroll.infiniteScrollComplete")
      }
    }
    $scope.loadMore();
    //筛选函数
    $scope.doSearch=function(cpriceId,CategoryId,searchInputText) {
      $scope.cpriceId=cpriceId;
      $scope.CategoryId=CategoryId;
      $scope.searchInputText=searchInputText;
      //重置数组
      $scope.lists=[];
      //当前页
      $scope.noePage=0;
      $scope.listChange=false;
      $scope.listColor={color:"#333"};
      $scope.listprice=false;
      $scope.pcolor={priceColor:"#333"}
      //是否继续加在数据
      $scope.moredata=true;
      //判断是否到达页面底部
      $scope.$broadcast("scroll.infiniteScrollComplete");
      //执行加载函数
      $scope.loadPage()
    }
    //下拉刷新
    $scope.doRefresh=function(){
      $timeout(function(){
        $scope.loadMore();
        $scope.$broadcast('scroll','infiniteScrollComplete')
      },1000)
    }
})

//登录注册器
  .controller('RegisterCtrl', function($scope,$http) {
    $scope.regInfo={
      name:"",
      email:"",
      phone:"",
      pwd:""
    }
    $scope.reg=function(){
       var regData={
         userName: $scope.regInfo.name,
         email: $scope.regInfo.email,
         phone: $scope.regInfo.phone,
         userPwd :$scope.regInfo.pwd,
         nickname:"",
         userPic:""
      }
      if( $scope.regInfo.name==""||$scope.regInfo.email==""|| $scope.regInfo.phone==""||$scope.regInfo.pwd==""){
        alert("信息不完整")
      }else{
        $http({
          url:"/Handler/UserHandler.ashx?action=add",
          type:"POST",
          params:regData,
        }).success(function(result){
          window.location="#/tab/class"
        })
      }
    }
  })

//退出页面服务器
  //$ionicPopup  退出弹框
  .controller("beautiful",function($scope,$http,$ionicPopup){
    $http({
      url:"/Handler/OnCourseHandler.ashx?action=returnuserinfo",
      method:"get",
      params:"",
    }).success(function(result){
      console.log(result);
      $scope.name=result.userName;
      $scope.email=result.email;
      $scope.phone=result.phone;
    })

    //退出按钮的操作
    $scope.back=function(){
      $http({
        url:"/Handler/UserHandler.ashx?action=quit",
        method:"POST",
        params:""
      }).success(function(result){
        $ionicPopup.alert("退出成功")
       window.location="#/tab/class"
      })
    }
  })





.controller('VideoCtrl', function () {

  })


//详情页面控制
.controller("StudyCtrl",function($scope,$stateParams,studyList,pingjiaList,$http,$rootScope,$ionicPopup){
//根据url传来的id获取当前的课程的id

  })
  //底部tabs隐藏显示指令
  .directive("hideTabs",function($rootScope){
    return {
      restrict:"A",
      link:function(scope,jqlite,ab){
        //scope 当前指令的作用域范围 通过scope可以后续取到参数方法
        //jqlite 控制样式属性的改变  jqlist.css（‘background’，‘#ccc’）
        //ab   当前自定义指令
        //$ionicView.beforeEnter  在进入下一个页面所触发的函数
        scope.$on("$ionicView.beforeEnter",function(){
          $rootScope.hideTabs=ab
        })
        scope.$on("$ionicView.beforeLeave",function(){
          $rootScope.hideTabs=false;
        })
      }
    }
  })










