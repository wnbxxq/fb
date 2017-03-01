angular.module('starter.services', [])

 //   service      factory    provider     controller

  //service   构造器  对象  方法

  //factory   直接对号进行构造   如果定义了一个函数后必须进行return
    //          定义的变量必须在控制器里面输入   可以重用

  //provider  在service里面直接注入，去使用该服务的功能

  //controller  控制器  模块之间的控制方法  不能重用


  //第一个参数作为第一个服务器里面的服务使用
  //第二个参数就是回调的函数
  .factory('lessonList',function(){
    var les=[
      {
      name:"ppppp",
      title:"iiiii",
      img:"img/ben.png"
    },
      {
        name:"ppppp",
        title:"iiiii",
        img:"img/ben.png"
      },
      {
        name:"ppppp",
        title:"iiiii",
        img:"img/ben.png"
      },
    ]
    return {
      list:function(){
        return les
      }
    }


  })

//.factory('Chats', function() {
//  var chats = [{
//    id: 0,
//    name: 'Ben Sparrow',
//    lastText: 'You on your way?',
//    face: 'img/ben.png'
//  }, {
//    id: 1,
//    name: 'Max Lynx',
//    lastText: 'Hey, it\'s me',
//    face: 'img/max.png'
//  }, {
//    id: 2,
//    name: 'Adam Bradleyson',
//    lastText: 'I should buy a boat',
//    face: 'img/adam.jpg'
//  }, {
//    id: 3,
//    name: 'Perry Governor',
//    lastText: 'Look at my mukluks!',
//    face: 'img/perry.png'
//  }, {
//    id: 4,
//    name: 'Mike Harrington',
//    lastText: 'This is wicked good ice cream.',
//    face: 'img/mike.png'
//  }];
//
//  return {
//    all: function() {
//      return chats;
//    },
//    remove: function(chat) {
//      chats.splice(chats.indexOf(chat), 1);
//    },
//    get: function(chatId) {
//      for (var i = 0; i < chats.length; i++) {
//        if (chats[i].id === parseInt(chatId)) {
//          return chats[i];
//        }
//      }
//      return null;
//    }
//  };
//});

