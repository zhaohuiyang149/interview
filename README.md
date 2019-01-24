# 总结知识点

## css

- background属性
- BFC的渲染机制、创建一个BFC、例子
- CSS权重（!important > 行内样式 > ID > class > 标签 > 通配）
- diaplay: inline  inline-block  block
- position: absolute relative fixed static inherit
- transform（变形）、transition（转换）、animation（动画） 以及相关loading例子
- 三栏布局（上中下）：绝对定位布局、table布局、flex布局、grid布局
- 三栏布局（左中右）：浮动布局、绝对定位布局、table布局、flex布局、grid布局
- 三角形（transparent）、自适应正方形（padding、margin的百分比）、品字布局
- 垂直居中：transform、flex、绝对定位+margin

## js

- 空数组、空对象与布尔值之间的转化：if([] == false) {console.log('true')} if([]) {console.log('true')} 
- 事件捕获、冒泡、自定义事件：window -> document -> html -> body -> .... ，element.addEventListener('click', function() {}, false/true)：事件监听默认在冒泡阶段(false)触发。自定义事件：Dom.dispatchEvent(eventName)
- setTimeout：定义、参数含义、运行机制。注：若被setTimeout执行的回调函数的某个对象的方法，该方法中的this指向的是全局环境
- 对象原型链：创建对象的方法、对象的原型链、new运算符创建对象的过程
- 面向对象：对象的继承
- array的原型链：判断arr是否为数组的几种方法、arr的原型链
- 闭包：概念、用途、注意事项、例子