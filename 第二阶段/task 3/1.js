//创建一个数组对象关于天气
var datas = [{
    city : "北京" ,
    air : "40"
},{
    city : "天津" ,
    air : "70"
},{
    city : "重庆" ,
    air : "90"
}];
// 在tbody里面创建行，通过数组长度进行循环创建
var tbody = document.querySelector('tbody');
for(var i = 0; i < datas.length ; i++){//for循环管理列
    //创建 tr行
    var tr = document.createElement('tr');
    //添加tr行
    tbody.appendChild(tr);
    //行里面创建单元格，用for循环遍历对象，里面的for循环管列
    for(var k in datas[i]){
        //船舰单元格
        var td = document.createElement('td');
        td.innerHTML = datas[i][k];
        tr.appendChild(td);
    }
    //创建删除的单元格
    var del = document.createElement('td');
    del.innerHTML = '<a herf= "javascript:;">删除</a>';
    tr.appendChild(del);
}
//删除操作
var del = document.querySelectorAll('a');
for(var i = 0; i <del.length ; i++){
    del[i].onclick = function (){
        //删除当前行node。remaoveChild（child）
        tbody.removeChild(this.parentNode.parentNode)

    }
}

//获取按钮
var add = document.getElementById('add-btn');
var urban = document.getElementById('aqi-city-input');
var breath = document.getElementById('aqi-value-input');
//按钮添加事件
add.onclick = function(){
    //判断条件
    if(urban.value == ''||breath.value == ''){
        alert('你没有输入内容');
        return false;
    }else{   
        var tr = document.createElement('tr');//创建行
        tbody.appendChild(tr)
        var td = document.createElement('td');//创建第一列
        td.innerHTML = urban.value;
        var ts = document.createElement('td');//创建第二列
        ts.innerHTML = breath.value;
        var dele= document.createElement('td');//创建第三列
        dele.innerHTML = '<a herf= "javascript:;" id="dele">删除</a>';
        tr.appendChild(td);
        tr.appendChild(ts);
        tr.appendChild(dele);
    }
    ref();
    var dele = document.getElementById('dele');//删除操作
        dele.onclick = function (){
            //删除当前行node。remaoveChild（child）
            tbody.removeChild(this.parentNode.parentNode);
        }
}
function ref(){//清除数据
    urban.value = "";
    breath.value = "";
}