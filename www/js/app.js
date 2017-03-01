// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

    /*用于修改安卓tab居下 （在参数里要加入$ionicConfigProvider）*/
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');

    // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {   //父级页面路径
    url: '/tab',     //渲染页面    本级页面的url
    abstract: true,  //是否自动跳转
    templateUrl: 'templates/tabs.html'  //加载模板路径    cache：false  是否缓存
  })

  // Each tab has its own nav history stack:

    //.state('tab.html',{
    //  url:'/tab',
    //  views:{
    //    'tab-dash':{
    //
    //    }
    //  }
    //})
    //首页
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
//我的课程
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    //.state('tab.chat-detail', {
    //  url: '/chats/:chatId',
    //  views: {
    //    'tab-chats': {
    //      templateUrl: 'templates/chat-detail.html',
    //      controller: 'ChatDetailCtrl'
    //    }
    //  }
    //})
//课程列表
  .state('tab.account', {
    url: '/account',
      cache:false,
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
    //个人中心
    .state('tab.class',{  //父级页面路径
      url:'/class',      //渲染页面
      cache:false,
      views:{
        'tab-class':{
          templateUrl:"templates/tab-class.html",
          controller:"ClassCtrl"
        }
      }
    })

//父子路由关系的写法
      .state('tab.register',{
      url:"/register",
      views:{
        "tab-class":{    //父子级页面跳转  views里面的文件名必须写成父级名称
          templateUrl:"templates/tab-register.html",
          controller:"RegisterCtrl"
        },
      }
    })
//登录控制器
    .state('tab.beautiful',{
      url:"/beautiful",
      views:{
        "tab-class":{
          templateUrl:"templates/tab-beautiful.html",
          controller:"beautiful"
        }
      }
    })

    //w我的课程学习页
    .state('tab.study',{
      url:"/study",
      cashe:false,
      views:{
        'tab-lessonList':{
          templateUrl:"templates/tab-study.html"
        }
      }
    })
    .state('tab.video',{
      url:'/video',
      cashe:false,
      views:{
        'tab-dash':{
          templateUrl:'templates/tab-video.html',
          controller:'VideoCtrl'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
