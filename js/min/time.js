// console.log('js文件正常运行');

// 定时器：每隔一段时间，执行一次方法
// function : 方法
// time : 时间 单位：毫秒
// setInterval(function,time);

// 每隔1秒钟，执行一次 updateTime
setInterval(updateTime,1000);

// 执行方法
updateTime();

// 用来获取时间的工具（方法）
function updateTime(){
    // console.log(123);
    // 获取当前时间
    var today = new Date();
    console.log(today);

    // 获取小时
    var hours = today.getHours();
    // 获取分钟
    var minutes = today.getMinutes();
    // 获取秒
    var seconds = today.getSeconds();

    console.log('时：' + hours + ' 分：' + minutes + ' 秒：' + seconds);

    // 三目运算符  条件表达式 ? 结果1 : 结果2
    // 如果条件成立，就执行结果1，否则执行结果2
    hours = hours<10 ? '0'+hours : hours;
    minutes = minutes<10 ? '0'+minutes : minutes;
    seconds = seconds<10 ? '0'+seconds : seconds; 

    // document.getElementById('id')通过id找元素，找到id为time的元素
    // innerHTML 改变标签的内容
    document.getElementById('time').innerHTML = 
    hours + ':' + minutes + ':' + seconds;

    // 获取年
    var year = today.getFullYear();
    // 获取月份，0是一月，1是二月，2是三月 ... 一次类推
    var month = today.getMonth() + 1;
    // 获取日
    var day = today.getDate();
    // 获取星期几，周一到周六对应 1~6，0是星期天
    var week = today.getDay();

    console.log('年：'+year+' 月：'+month+' 日：'+day+' 星期：'+week);

    // 当时间小于10的时候，前面补0
    month = month<10 ? '0'+month : month;
    day = day<10 ? '0'+day : day;

    // 处理星期 把数字，比如2 转化成 星期二
    // break 结束语句
    // case 语句只能有一个执行
    switch (week) {
        case 0:
            week = '星期日';
            break;
        case 1:
            week = '星期一';
            break;
        case 2:
            week = '星期二';
            break;
        case 3:
            week = '星期三';
            break;
        case 4:
            week = '星期四';
            break;
        case 5: 
            week = '星期五';
            break;
        case 6:
            week = '星期六';
            break;
    }


    document.getElementById('date').innerHTML = 
    year + '年' + month + '月' + day + '日' + ' ' + week;

}