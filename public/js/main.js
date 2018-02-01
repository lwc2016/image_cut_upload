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
/*-------左上触点------*/
var leftTopEl = document.querySelector(".top-left");
/*-------右上触点-----*/
var rightTopEl = document.querySelector(".top-right");
/*-------左下触点------*/
var leftBottomEl = document.querySelector(".bottom-left");
/*-------右下触点-------*/
var rightBottomEl = document.querySelector(".bottom-right");

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
leftTopEl.onmousedown = function(e){
    isAble = true;
    type = "leftTop";
};
rightTopEl.onmousedown = function(e){
    isAble = true;
    type = "rightTop";
};
leftBottomEl.onmousedown = function(e){
    isAble = true;
    type = "leftBottom";
};
rightBottomEl.onmousedown = function(e){
    isAble = true;
    type = "rightBottom";
};


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
    
        /*------------操作左侧触点和顶部触点时------------*/
        var afterWidth1 = beforeWidth - (pageX - offsetLeft);
        var afterHeight1 = beforeHeight - (pageY - offsetTop);
		
		var afterLeft = left + (pageX - offsetLeft);
		var afterTop = top + (pageY - offsetTop);


        if (type == "right") {
            rightMove(afterWidth);
        };
        if(type == "bottom"){
            bottomMove(afterHeight);
        };
        if(type == "left"){
            leftMove(afterWidth1, afterLeft);
        };
        if(type == "top"){
            topMove(afterHeight1, afterTop);
        };
        if(type == "leftTop"){
            leftMove(afterWidth1, afterLeft);
            topMove(afterHeight1, afterTop);
        };
        if(type == "rightTop"){
            rightMove(afterWidth);
            topMove(afterHeight1, afterTop);
        };
        if(type == "leftBottom"){
            bottomMove(afterHeight);
            leftMove(afterWidth1, afterLeft);
        };
        if(type == "rightBottom"){
            bottomMove(afterHeight);
            rightMove(afterWidth);
        };
    };
};


function rightMove(width){
    selectArea.style.width = width + "px";
};
function bottomMove(width){
    selectArea.style.height = width + "px";
};
function leftMove(width, left){
    selectArea.style.width = width + "px";
    selectArea.style.left = left + "px";
};
function topMove(height, top){
    selectArea.style.height = height + "px";
    selectArea.style.top = top + "px";
};

window.onmouseup = function() {
    isAble = false;
};