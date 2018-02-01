var selectArea = document.querySelector(".selectArea");
var topImg = document.querySelector(".topImg");
var content = document.querySelector(".content");
var contentWidth = content.clientWidth;
var contentHeight = content.clientHeight;

/*-------右侧触点-------*/
var rightEl = document.querySelector(".right");
/*-------底部触点-------*/
var bottomEl = document.querySelector(".bottom");
/*-------左侧触点-------*/
var leftEl = document.querySelector(".left");
/*-------顶部触点-----*/
var topEl = document.querySelector(".top");

var isAble = false;
var type = null;
rightEl.onmousedown = function(e) {
    isAble = true;
    type = "right";
};
bottomEl.onmousedown = function(e){
	isAble = true;
	type = "bottom";
};
leftEl.onmousedown = function(e){
	isAble = true;
	type = "left";
};
topEl.onmousedown = function(e){
	isAble = true;
	type = "top";
};
console.log(selectArea.offsetLeft);
window.onmousemove = function(e) {
    if (isAble) {
        /*-------获取鼠标的位置-----------------*/
        var pageX = e.pageX;
		var pageY = e.pageY;

        /*-------移动之前selectArea相对的位置----------*/
        var offsetLeft = getPosition(selectArea).left;
        var offsetTop = getPosition(selectArea).top;

        /*-------移动之前selectArea相对父元素的位置-----------*/
        var left = selectArea.offsetLeft;
        var top = selectArea.offsetTop;


        /*-------移动之前selectArea的宽度和高度--------*/
        var beforeWidth = selectArea.clientWidth;
		var beforeHeight = selectArea.clientHeight;

        /*-------X轴方向增加的值--------------*/
        var addX = pageX - (offsetLeft + beforeWidth);
		var addY = pageY - (offsetTop + beforeHeight);
		

		/*------------操作右侧触点和底部触点时-----------*/
        var afterWidth = pageX - offsetLeft;
		var afterHeight = pageY - offsetTop;

		
		var afterLeft = left + (pageX - offsetLeft);
		var afterTop = top + (pageY - offsetTop);
		/*--------操作右侧触点---------*/
        if (type == "right") {
            if (afterWidth >= contentWidth + 1) {
                afterWidth = beforeWidth;
            };
            selectArea.style.width = afterWidth + "px";
        };
        if(type == "bottom"){
        	console.log("aaa");
			selectArea.style.height = afterHeight + "px";
        };
        if(type == "left"){
			selectArea.style.left = afterLeft + "px";
        };
        if(type == "top"){
        	selectArea.style.top = afterTop + "px";
        }
    };
};
window.onmouseup = function() {
    isAble = false;
};