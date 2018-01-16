/*-----------获取选取框的元素-----------*/
var selectArea = document.querySelector(".selectArea");

/*-----------获取右侧触点--------*/
var rightEl = document.querySelector(".right");
var bottomEl = document.querySelector(".bottom");
var leftEl = document.querySelector(".left");
var topEl = document.querySelector(".top");
var leftTopEl = document.querySelector(".left-top");
var rightTopEl = document.querySelector(".right-top");
var leftBottomEl = document.querySelector(".left-bottom");
var rightBottomEl = document.querySelector(".right-bottom");

var isKeyUp = false;
var type = "";
rightEl.onmousedown = function(e){
	isKeyUp = true;
	type = "right";
};
bottomEl.onmousedown = function(e){
	isKeyUp = true;
	type = "bottom";
};
leftEl.onmousedown = function(e){
	isKeyUp = true;
	type = "left";
};
topEl.onmousedown = function(e){
	isKeyUp = true;
	type = "top";
};
leftTopEl.onmousedown = function(e){
	isKeyUp = true;
	type = "leftTop"
};
rightTopEl.onmousedown = function(e){
	isKeyUp = true;
	type = "rightTop";
};
leftBottomEl.onmousedown = function(e){
	isKeyUp = true;
	type = "leftBottom";
};
rightBottomEl.onmousedown = function(e){
	isKeyUp = true;
	type = "rightBottom";
};


window.onmousemove = function(e){
	if(isKeyUp){
		/*-------获取当前鼠标的横坐标---------*/
		var x = e.clientX;

		/*-------获取当前鼠标的纵坐标---------*/
		var y = e.clientY;

		/*-------获取元素距离窗口左侧的距离------------------*/
		var elementLeft = getPosition(selectArea).left;

		/*-------获取元素距离顶部的距离----------------------*/
		var elementTop = getPosition(selectArea).top;

		/*-------获取选取框变化之前的宽度---------------------*/
		var beforeWidth = selectArea.clientWidth;
	
		/*-------获取选取框变化之前的高度---------------------*/
		var beforeHeight = selectArea.clientHeight;
		
		/*-------获取增加的宽度----------------*/
		var addWidth = x - elementLeft - beforeWidth;
		/*-------获取选取框增加的高度---------------------------*/
		var addHeight = y - elementTop - beforeHeight;
		
		/*-------获取选取框之前相对父元素左侧的距离-------------*/
		var beforeLeft = selectArea.offsetLeft;
		/*-------获取选取框之前相对父元素顶侧的距离------------*/
		var beforeTop = selectArea.offsetTop;

		/*-------横坐标增加的距离----------------*/
		var addX = x - elementLeft;
		/*-------纵坐标增加的距离-----------------*/
		var addY = y - elementTop;

		/*-------获取变化之后相对元素左侧的距离---------*/
		var afterX = beforeLeft + addX;
		var afterY = beforeTop + addY;
		var afterWidth1 = beforeWidth - addX;
		if(afterX <= -1){
			afterX = -1;
			afterWidth1 = beforeWidth;
		};
		if(afterY <= -1){
			afterY = -1;
		};
		
		if(type == "top"){
			topMove();
		};
		if(type == "left"){
			leftMove();
		};
		if(type == "right"){
			rightMove();
		};
		if(type == "bottom"){
			bottomMove();
		};


		if(type == "leftTop"){
			topMove();
			leftMove();
		};

		if(type == "rightTop"){
			rightMove();
			topMove();
		};

		if(type == "leftBottom"){
			leftMove();
			bottomMove();
		};

		if(type == "rightBottom"){
			rightMove();
			bottomMove();
		};

		function leftMove(){
			selectArea.style.left = afterX + "px";
			selectArea.style.width = beforeWidth - addX + "px";
		};
		function topMove(){
			selectArea.style.top = afterY + "px";
			selectArea.style.height = beforeHeight - addY + "px";
		};
		function rightMove(){
			selectArea.style.width = beforeWidth + addWidth + "px";
		};
		function bottomMove(){
			selectArea.style.height = beforeHeight + addHeight + "px";
		};
	};
};



window.onmouseup = function(){
	console.log("------onmouseup---------");
	isKeyUp = false;
	type = "";
};
