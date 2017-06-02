
// 声明一个方法，用来创建雪花
function createSnow() {
    // console.log('方法调用了');

    // create 创建，element 元素、标签
    // document.createElement('标签名') 创建一个标签
    var snow = document.createElement('img');

    // 获取可视页面的宽高
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    //console.log('宽：'+width + ' 高：'+height);


    // Math.random() 获取0~1之间的随机数(不包含1)
    // top 取值范围 0 ~ height
    var top = height * Math.random();
    // left 取值范围 0 ~ width
    var left = width * Math.random();
    //console.log('top='+top + ' left='+left);


    // 加载图片资源
    // src:资源，图片的路径
    // <img src="flake.png">
    snow.src = './images/flake.png';
    // 通过js改变元素的样式   设置绝对定位
    snow.style.position = 'absolute';
    // 设置元素距离body顶部的距离
    snow.style.top = top + 'px';
    // 设置元素距离body左边的距离
    snow.style.left = left + 'px';
    // transform 改变，scale 比例
    // 改变元素放大或者缩小的比例，1不变
    snow.style.transform = 'scale(' + Math.random()/4 + ')';                           
    // document.body 找到body标签
    // appendChild() 在标签内部最后的位置添加子元素
    // 在body内部最后的位置添加一个img标签
    document.body.appendChild(snow);

    // 负责让雪花下落
    function down() {
        // 就相当于top = top + 10 
        top += 10 * Math.random();
        left += 10 * Math.random();

        // 当雪花飘出页面之外是，让雪花回到页面的左上角
        if(top > height){
            top  = -100;
        }
        if(left > width){
            left = -100;
        }

        // 更新雪花的坐标
        snow.style.top = top + 'px';
        snow.style.left = left + 'px';
    }
    // 每隔50毫秒调用一次down方法，
    // setInterval(调用的方法,间隔的时间)，时间：毫秒
    setInterval(down,50);


}
// 调用方法
// createSnow();
// i ++ 自增1,就相当于 i = i + 1

function reset(){
    var w = document.documentElement.clientWidth; 
    if( w>1440){
        document.body.style.overflow='hidden'   
        // 使用for循环创建多个雪花
        for(var i = 0; i < 50; i ++){
            // console.log(i);
            createSnow();
        }
    }    
}
reset();
window.onresize=reset;


