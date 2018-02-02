var selectArea = document.querySelector(".selectArea");
var topImg = document.querySelector(".topImg");
var bottomImg = document.querySelector(".bottomImg");
var content = document.querySelector(".content");
var submit = document.querySelector(".submit");
var preview = document.querySelector(".preview");
var contentWidth = content.clientWidth;
var contentHeight = content.clientHeight;

var inputEl = document.querySelector("#file");
inputEl.onchange = function(e){
    console.log(e.target.files[0]);
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader);
    reader.onloadend = function(){
        var base64 = reader.result;
        topImg.src = base64;
        bottomImg.src = base64;

        var img = new Image();
        img.src = base64;
        img.onload = function(){
            console.log(img.width);
            console.log(img.height);
            content.style.width = img.width + "px";
            content.style.height = img.height + "px";
        }
    };
};



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


var imgWidth = 100;
var imgHeight = 100;
var imgTop = 0;
var imgLeft = 0;

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

		/*------------操作右侧触点和底部触点后宽度和高度-----------*/
        var afterWidth = pageX - offsetLeft;
		var afterHeight = pageY - offsetTop;
    
        /*------------操作左侧触点和顶部触点后宽度和高度------------*/
        var afterWidth1 = beforeWidth - (pageX - offsetLeft);
        var afterHeight1 = beforeHeight - (pageY - offsetTop);
		
        /*------------操作触点后位置----------*/
		var afterLeft = left + (pageX - offsetLeft);
		var afterTop = top + (pageY - offsetTop);
        

        if (type == "right") {
            imgWidth = afterWidth;
            rightMove(afterWidth);
        };
        if(type == "bottom"){
            imgHeight = afterHeight;
            bottomMove(afterHeight);
        };
        if(type == "left"){
            imgWidth = afterWidth1;
            imgLeft = afterLeft;
            leftMove(afterWidth1, afterLeft);
        };
        if(type == "top"){
            imgHeight = afterHeight1;
            imgTop = afterTop;
            topMove(afterHeight1, afterTop);
        };
        if(type == "leftTop"){
            imgWidth = afterWidth1;
            imgHeight = afterHeight1;
            imgTop = afterTop;
            imgLeft = afterLeft;
            leftMove(afterWidth1, afterLeft);
            topMove(afterHeight1, afterTop);
        };
        if(type == "rightTop"){
            imgWidth = afterWidth;
            imgHeight = afterHeight1;
            imgTop = afterTop;

            rightMove(afterWidth);
            topMove(afterHeight1, afterTop);
        };
        if(type == "leftBottom"){
            imgWidth = afterWidth1;
            imgHeight = afterHeight;
            imgLeft = afterLeft;

            bottomMove(afterHeight);
            leftMove(afterWidth1, afterLeft);
        };
        if(type == "rightBottom"){
            imgWidth = afterWidth;
            imgHeight = afterHeight;

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

submit.onclick = function(){
    var file = document.querySelector("#file").files[0];
    if(!file) return alert("请选择图片");

    var data = {
        width: imgWidth,
        height: imgHeight,
        top: imgTop,
        left: imgLeft
    };
    upload(data, file, function(res){
        console.log(res);
        preview.src = res.result;
    });
};


