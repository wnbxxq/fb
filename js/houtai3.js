/**
 * Created by dabo on 2016/12/22.
 */

$(function(){
  //配置文件
  //require  模块加载    require.js     require(./1.js) node
  require.config({
    paths:{    //文件路径
      echarts:"../lib/dist",
    }
  })
  require(
    [
      "echarts",
      "echarts/chart/bar",
      "echarts/chart/pie",
      "echarts/chart/gauge",
      "echarts/theme/macarons"
    ],
  function(ec){
    var chart01=ec.init(document.getElementById("chart01"));
    option={
      title:{
        text:"学习人数比例",
        subtext:"",    //子标题
        x:"center"
      },
      tooltip:{
        formatter:"{a}<br>{b}%{c}",       //与下面的data数据相关
        trigger:""     //可拖拽
      },
      toolbox:{},
      series:[
        {
          type:"pie",
          data:[
            {value:210,name:"未通过"},
            {value:666,name:"通过"}
          ]
        }
      ]
    };
    chart01.setOption(option);
  }
  );
  require(
    [
      "echarts",
      "echarts/chart/bar",
      "echarts/chart/pie",
      "echarts/chart/gauge",
      "echarts/theme/macarons"
    ],
    function(ev){
      var chart02=ev.init(document.getElementById("chart02"));
      option = {
        title:{
          text:"学习人数比例",
          x:"center",
        },
        tooltip : {
          formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {},
        series : [
          {
            type:'gauge',
            detail : {formatter:'{value}%'},
            data:[{value: 90, name: '呆萌指数'}]
          }
        ]
      };
      chart02.setOption(option);
    }
  );
  require(
    [
      "echarts",
      "echarts/chart/bar",
      "echarts/chart/pie",
      "echarts/chart/gauge",
      "echarts/theme/macarons"
    ],
    function(ew){
      var chart03=ew.init(document.getElementById("chart03"));
      option = {
        title: {
          x: 'center',
          text:"时间 课程 新增课程输",
        },
        tooltip: {

        },
        toolbox: {},
        calculable: true,

        xAxis: [
          {
            type: 'category',
            show: false,
            data: ["学习时间", '总课程数', '新增课程输', 'Gauge', 'Funnel']
          }
        ],
        yAxis: [
          {
            type: 'value',
            show: false
          }
        ],
        series: [
          {
            name:"时间 课程 新增课程输",
            type: 'bar',
            itemStyle: {
              normal: {
                color: function(params) {
                  // build a color map as your need.
                  var colorList = [
                    '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                    '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                    '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                  ];
                  return colorList[params.dataIndex]
                },
                label: {
                  show: true,
                  position: 'top',

                }
              }
            },
            data: [12,21,10,],
            markPoint: {
              tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(0,0,0,0)',
              },
              data: [
                {xAxis:0, y: 350, name:'Line', symbolSize:10,},
                {xAxis:1, y: 350, name:'Bar', symbolSize:10, },
                {xAxis:2, y: 350, name:'Scatter', symbolSize:10,},
              ]
            }
          }
        ]
      };
      chart03.setOption(option);
    }
  )
})
