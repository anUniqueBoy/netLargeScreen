$(window).load(function () { $(".loading").fadeOut() })
$(function () {
    var part1Data = [
        {
            type:'紧急',
            name:'22',
            num:9,
            percent: 90,
            ip:'192.168.1.111'
        },
        {
            type:'紧急',
            name:'22',
            num:7,
            percent: 70,
            ip:'192.168.1.111'
        },
        {
            type:'紧急',
            name:'22',
            num:5,
            percent: 50,
            ip:'192.168.1.111'
        },
        {
            type:'紧急',
            name:'22',
            num:3,
            percent: 30,
            ip:'192.168.1.111'
        },
        {
            type:'紧急',
            name:'33',
            num:1,
            percent: 10,
            ip:'192.168.1.111'
        },
        {
            type:'紧急',
            name:'22',
            num:0,
            percent: 0,
            ip:'192.168.1.111'
        },
    ]
    var part1str = '';
    var tableData = [
        {
           num:1,
           title:'累计交易总金额',
           money:'4058.56 万元',
        },
        {
            num:2,
            title:'累计交易订单数量',
            money:'437753 件',
        },
        {
            num:3,
            title:'累计产品SKU数量',
            money:'360 个',
        },
        {
            num:4,
            title:'本月交易总额',
            money:'242.42 万元',
        },
        {
            num:5,
            title:'本月交易订单数量',
            money:'5283 件',
        },
        {
            num:6,
            title:'累计交易总金额',
            money:'4058.56 万元',
        },
        {
            num:7,
            title:'累计交易订单数量',
            money:'437753 件',
        },
        {
            num:8,
            title:'累计产品SKU数量',
            money:'360 个',
        },
    ]
    echarts_1();
    echarts_2();
    echarts_3();
    echarts_4();
    echarts_5();
    echarts_6();
    part1Append();
    part2Append();
    tableAppend()
    timeChange();
    // zb1();
    // zb2();
    // zb3();
    // zb4();
    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option9);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function timeChange(){
        setInterval(function(){
            for(var i=0;i<part1Data.length;i++){
                if(part1Data[i].num<10){
                    part1Data[i].num+=1
                    part1Data[i].percent+=10
                }else{
                    part1Data[i].num = 0
                    part1Data[i].percent = 0
                }
            }
            part1str = ''
            part1Append()
            part2Append()
        }, 3000)
    }
    function part1Append(){
        for(var i=0;i<part1Data.length;i++){
            let strli = ''
            for(var z=0;z<10;z++){
                if(part1Data[i].num>z){
                    strli += '<li class="pulll_left proce-block"></li>'
                }else{
                    strli += '<li class="pulll_left proce-block proce-block-opa"></li>'
                }
            }
            part1str +=
                    '<li class="clearfix part1-li">'+
                      '<span class="high pulll_left">'+part1Data[i].type+'</span>'+
                      '<span class="name pulll_left">'+part1Data[i].name+'</span>'+
                      '<ul class="clearfix pulll_left">'+strli+
                      '</ul>'+
                      '<span class="percent pulll_left">'+part1Data[i].percent+'%</span>'+
                    '</li>'
        }
        $('#part1FirstUl').html(part1str);
    }
    
    // 设备显示不显示
    // $('#second-two').hide()
    var changeFirst = document.getElementById('changeFirst');
    changeFirst.addEventListener('click', changeShow, false); //鼠标单击的时候调用showMes这个函数 
    var nowShow = 1
    function changeShow(){
        if(nowShow==1){
            nowShow = 2 
            $('#second-two').show(1000)
            $('#second-first').hide(1000)
        }else{
            nowShow = 1
            $('#second-two').hide(1000)
            $('#second-first').show(1000)
        }
    }

    // //图表切换 
    // $('#echart5').hide()
    var chartTab = document.getElementById('chartTab');
    chartTab.addEventListener('click', changeTab, false); //鼠标单击的时候调用showMes这个函数 
    var nowTab = 1
    function changeTab(){
        if(nowTab==1){
            nowTab = 2 
            $('#echart5').show(1000)
            $('#echart4').hide(1000)
        }else{
            nowTab = 1
            $('#echart5').hide(1000)
            $('#echart4').show(1000)
        }
    }

    function part2Append(){
        var part2str = ''
        for(var i=0;i<part1Data.length;i++){
            let str = '';
            let num = part1Data[i].num
            if(num>=8){
                str = '<span class="name red-name">'+part1Data[i].name+'</span>'+
                '<div class="process-box">'+
                  '<div class="process-content red-content" style="width:'+part1Data[i].percent+'%"><div>'+part1Data[i].ip+'</div></div>'+
                '</div>'+
                '<span class="percent red-name">'+part1Data[i].percent+'%</span>'
            }else if(num>=6&&num<8){
                str = '<span class="name orange-name">'+part1Data[i].name+'</span>'+
                '<div class="process-box">'+
                  '<div class="process-content orange-content" style="width:'+part1Data[i].percent+'%"><div>'+part1Data[i].ip+'</div></div>'+
                '</div>'+
                '<span class="percent orange-name">'+part1Data[i].percent+'%</span>'
            }else if(num>=4&&num<6){
                str = '<span class="name yellow-name">'+part1Data[i].name+'</span>'+
                '<div class="process-box">'+
                  '<div class="process-content yellow-content" style="width:'+part1Data[i].percent+'%"><div>'+part1Data[i].ip+'</div></div>'+
                '</div>'+
                '<span class="percent yellow-name">'+part1Data[i].percent+'%</span>'
            } if(num>=0&&num<4){
                str = '<span class="name blue-name">'+part1Data[i].name+'</span>'+
                '<div class="process-box">'+
                  '<div class="process-content blue-content" style="width:'+part1Data[i].percent+'%"><div>'+part1Data[i].ip+'</div></div>'+
                '</div>'+
                '<span class="percent blue-name">'+part1Data[i].percent+'%</span>'
            }
            part2str +=
                    '<li class="clearfix part1-li">'+
                      '<span class="high pulll_left">'+part1Data[i].type+'</span>'+str+
                    '</li>'
        }
        $('#part2FirstUl').html(part2str);
    }
    function tableAppend(){
        var tablestr = ''
        for(var i=0;i<tableData.length;i++){
            tablestr += '<tr>'+
                        '<td>'+tableData[i].num+'</td>'+
                        '<td>'+tableData[i].title+'</td>'+
                        '<td>'+tableData[i].money+'</td>'+
                       '</tr>'
        }
        $('#table1').html(tablestr);
        $('#table2').html(tablestr);
        $('#table3').html(tablestr);
    }
    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

        option = {
            title : {
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                orient : 'vertical',
                x : 'right',
                y : 'bottom',
            },
            polar : [
               {
                   indicator : [
                       { text: 'sales', max: 6000},
                       { text: 'Administration', max: 16000},
                       { text: 'Information Techology', max: 30000},
                       { text: 'Customer Support', max: 38000},
                       { text: 'Development', max: 52000},
                       { text: 'Marketing', max: 25000}
                    ]
                }
            ],
            calculable : true,
            series : [
                {
                    type: 'radar',
                    data : [
                        {
                            value : [4300, 10000, 28000, 35000, 50000, 19000],
                        },
                         {
                            value : [5000, 14000, 28000, 31000, 42000, 21000],
                        }
                    ]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));

        option = {
            title : {
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                orient : 'vertical',
                x : 'right',
                y : 'bottom',
            },
            polar : [
               {
                   indicator : [
                       { text: 'sales', max: 6000},
                       { text: 'Administration', max: 14000},
                       { text: 'Information Techology', max: 30000},
                       { text: 'Customer Support', max: 38000},
                       { text: 'Development', max: 78000},
                       { text: 'Marketing', max: 25000}
                    ]
                }
            ],
            calculable : true,
            series : [
                {
                    type: 'radar',
                    data : [
                        {
                            value : [4300, 10000, 28000, 35000, 50000, 19000],
                        },
                         {
                            value : [5000, 14000, 28000, 31000, 42000, 21000],
                        }
                    ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        option = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['意向','预购','成交'],
                textStyle: {
                    color: '#fff',
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日'],
                    axisLabel: {
                        color: '#fff'
                    },
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        color: '#fff'
                    },
                }
            ],
            series : [
                {
                    name:'成交',
                    type:'line',
                    smooth:true,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[10, 12, 21, 54, 260, 830, 710]
                },
                {
                    name:'预购',
                    type:'line',
                    smooth:true,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[30, 182, 434, 791, 390, 30, 10]
                },
                {
                    name:'意向',
                    type:'line',
                    smooth:true,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[1320, 1132, 601, 234, 120, 90, 20]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
        option = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['意向','预购','成交'],
                textStyle: {
                    color: '#fff',
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日'],
                    axisLabel: {
                        color: '#fff'
                    },
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        color: '#fff'
                    },
                }
            ],
            series : [
                {
                    name:'成交',
                    type:'line',
                    smooth:true,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[10, 123, 456, 54, 260, 34, 710]
                },
                {
                    name:'预购',
                    type:'line',
                    smooth:true,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[30, 182, 434, 791, 390, 30, 10]
                },
                {
                    name:'意向',
                    type:'line',
                    smooth:true,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[23, 34, 45, 234, 120, 90, 20]
                }
            ]
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));
        option = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['意向','预购','成交'],
                textStyle: {
                    color: '#fff',
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日'],
                    axisLabel: {
                        color: '#fff'
                    },
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        color: '#fff'
                    },
                }
            ],
            series : [
                {
                    name:'成交',
                    type:'line',
                    smooth:true,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[10, 123, 456, 54, 260, 34, 710]
                },
                {
                    name:'预购',
                    type:'line',
                    smooth:true,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[30, 182, 434, 791, 390, 30, 10]
                },
                {
                    name:'意向',
                    type:'line',
                    smooth:true,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[23, 34, 45, 234, 120, 90, 20]
                }
            ]
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function zb1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb1'));
        var v1 = 60//结算数
        var v2 = 40//未结算数
        var v3 = v1 + v2//总订单数
        option = {
            series: [{
                type: 'pie',
                radius: ['60%', '70%'],
                color: '#49bcf7',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v1,
                    name: '数量结算率',
                    label: {
                        normal: {
                            formatter: Math.round(v1 / v3 * 100) + '%',
                            textStyle: {
                                fontSize: 30,
                                color: '#fff',
                            }
                        }
                    }
                },
                {
                    value: v2,
                    label: {
                        normal: {
                            formatter: function (params) {
                                return '数量结算率'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 16
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function zb2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb2'));
        var v1 = 80//结算数
        var v2 = 20//未结算数
        var v3 = v1 + v2//总订单数
        option = {

            //animation: false,
            series: [{
                type: 'pie',
                radius: ['60%', '70%'],
                color: '#49bcf7',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v1,
                    name: '数量结算率',
                    label: {
                        normal: {
                            formatter: Math.round(v1 / v3 * 100) + '%',
                            textStyle: {
                                fontSize: 24,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v2,
                    label: {
                        normal: {
                            formatter: function (params) {
                                return '数量结算率'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 16
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function zb3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb3'));
        var v1 = 30//结算金额
        var v2 = 70//未结算
        var v3 = v1 + v2
        option = {
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#62c98d',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v1,
                    name: '金额结算率',
                    label: {
                        normal: {
                            formatter: Math.round(v1 / v3 * 100) + '%',
                            textStyle: {
                                fontSize: 24,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v2,
                    label: {
                        normal: {
                            formatter: function (params) {
                                return '金额结算率'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 16
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function zb4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb4'));
        var v1 = 90//结算金额
        var v2 = 10//未结算
        var v3 = v1 + v2
        option = {
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#29d08a',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v1,
                    name: '金额结算率',
                    label: {
                        normal: {
                            formatter: Math.round(v1 / v3 * 100) + '%',
                            textStyle: {
                                fontSize: 24,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v2,
                    label: {
                        normal: {
                            formatter: function (params) {
                                return '金额结算率'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 16
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})


















