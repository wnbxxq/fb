/**
 * Created by Administrator on 2016/11/16.
 */
var GLOBAL=GLOBAL||{};
Ext.onReady(function () {


//  创建联动数据仓库
  GLOBAL.searchOneStore=Ext.create("Ext.data.Store",{
    fields:["name","classifyCode","fatherCode"]
  })

  GLOBAL.searchTwoStore=Ext.create("Ext.data.Store",{
    fields:["name","classifyCode","fatherCode"]
  })
//  创建数据仓库
  GLOBAL.searchStore=Ext.create("Ext.data.Store",{
    fields:["title","nomber","courseId","classifyCode","updateAt","createAt","status"]
  })

//  创建分页栏
  GLOBAL.searchBar=Ext.create("PagingToolBar",{
    id:"",
    onChange:function (num,pageFirst,pageSize) {
      var pageStart=pageFirst/pageSize+1;
      getList(pageStart,pageFirst);
    }
  })

// 创建数据表格
  GLOBAL.searchBox=Ext.create("Ext.grid.Panel",{
    renderTo:'searchBox',
    bbar:GLOBAL.searchBar,
    store:GLOBAL.searchStore,
    minHeight:BPR.gridMinHeight,
    columns:[
      {"header":"课程名称",width:200,dataIndex:"title"},
      {"header":"课程代号",width:200,dataIndex:"nomber"},
      {"header":"所属分类",width:200,dataIndex:"classifyCode",
      renderer:function (value,cellmeat,record) {
        if(value==3){
          return "html"
        }else if(value==4){
          return "css"
        }else if(value==5){
          return "javascript"
        }else if(value==6){
          return "java"
        }else if(value==7){
          return "php"
        }else if(value==8){
          return "nodejs"
        }
      }},
      {"header":"状态",width:200,dataIndex:"status"},
      {"header":"编辑日期",width:200,dataIndex:"createAt"},
      {"header":"操作",width:250,dataIndex:"courseId",flex:1,
      renderer:function (value,cellmeat,record) {
        return "<a class='xn_tablea' onclick='editWin("+value+")'>编辑</a><a class='xn_tablea' onclick='dataDel()'>删除</a>"
      }},
    ]
  })
  // 请求数据
  getList()
})

//请求数据
function getList(pageStart,pageFirst) {
    GLOBAL.searchBar.loadPage(pageFirst?pageFirst:0,GLOBAL.tableData.length);

    // 表格请求数据
    pageStart=pageStart?pageStart:1;
    console.log(pageStart);
    var arrery=[];
    for(var i=0;i<GLOBAL.tableData.length;i++){
      if(GLOBAL.tableData[i].courseId<=(pageStart)*10&&GLOBAL.tableData[i].courseId>(pageStart-1)*10){
        arrery.push(GLOBAL.tableData[i])
      }
    }
    GLOBAL.searchStore.loadData(arrery)

    //二级联动第一框数据
    var arr=[];
    for(var i=0;i<GLOBAL.classifyData.length;i++){
      if(GLOBAL.classifyData[i].fatherCode==null){
        arr.push(GLOBAL.classifyData[i])
      }
    }
    console.log(arr);
    GLOBAL.searchOneStore.loadData(arr);

}


// 编辑弹窗
function editWin(userId) {


 GLOBAL.editWin=new Ext.custom.basicWindow({
   title:"添加",
   width:500,
   height:320,
   bodyPadding:25,
   items:[{
       xtype:"panel",
       items:[
         new Ext.custom.middletextfield({
           itemId:"eName",
           fieldLabel:"课程名称",
           beforeLabelTextTpl:required,
           margin:"15 0 0 10",
         }),new Ext.custom.middletextfield({
           itemId:"eNumber",
           fieldLabel:"课程代号",
           beforeLabelTextTpl:required,
           margin:"15 0 0 10",
         })
       ]
   },{
     xtype:"panel",
     layout:"hbox",
     margin:"15 0 0 10",
     items:[
       new Ext.custom.basicCombo({
         itemId:'searchOne',
         displayField:"name",
         valueField:"classifyCode",
         fieldLabel:"所属分类",
         store:GLOBAL.searchOneStore,
         plugins:["clearbutton"],
         listeners:{
           change:function (comb,newValue,oldValue) {
             GLOBAL.editWin.down("#searchTwo").setValue();
             if(newValue){
               var arr=[];
               for(var i=0;i<GLOBAL.classifyData.length;i++){
                 if(GLOBAL.classifyData[i].fatherCode==newValue){
                   arr.push(GLOBAL.classifyData[i])
                 }
               }
             }
             GLOBAL.searchTwoStore.loadData(arr)
           }
         }
       }), new Ext.custom.basicCombo({
         itemId:'searchTwo',
         displayField:"name",
         valueField:"fatherCode",
         store:GLOBAL.searchTwoStore,
         plugins:["clearbutton"],
       })
     ]
   },{
     xtype:"panel",
     margin:"15 0 0 100",
     items:[{
       xtype:"button",
       width:100,
       height:34,
       text:"确定",
       style:"background:green",
       handler:function () {
         editor(userId)
         GLOBAL.editWin.hide();
       }
     },{
       xtype:"button",
       width:100,
       height:34,
       text:"取消",
       margin:"0 0 0 30",
       handler:function () {
         GLOBAL.editWin.hide();
       }
     }]

   }]
 }).show()

  if(userId){
    var data=GLOBAL.searchBox.getSelectionModel().getSelection()[0].data;
    console.log(data);
    GLOBAL.editWin.down("#eName").setValue(data.title);
    GLOBAL.editWin.down("#eNumber").setValue(data.nomber);
    var pageStart=pageStart?pageStart:1;
    GLOBAL.editWin.down("#searchOne").setRawValue(
      GLOBAL.classifyData[data.classifyCode-1].fatherCode==1?GLOBAL.classifyData[0].name:GLOBAL.classifyData[1].name
    );
    GLOBAL.editWin.down("#searchTwo").setRawValue(
      GLOBAL.tableData.courseId<=(pageStart)*10?GLOBAL.classifyData[data.classifyCode-1].name:GLOBAL.classifyData[data.classifyCode-1].name
    )



  }

}
// 确定编辑
function editor(editorId) {
  for(var i=0;i<GLOBAL.tableData.length;i++){
    if(GLOBAL.tableData[i].courseId==editorId){
      GLOBAL.tableData[i].title=GLOBAL.editWin.down("#eName").getValue()
      GLOBAL.tableData[i].nomber=GLOBAL.editWin.down("#eNumber").getValue()
    }
  }
  getList()
}

// 删除数据
function dataDel(dataId) {
  var dataStore=GLOBAL.searchBox.getSelectionModel().getSelection();
    for(var i=0;i<dataStore.length;i++){
      GLOBAL.searchBox.store.remove(dataStore[i])
    }
}



























































