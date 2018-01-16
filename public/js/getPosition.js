/*--------获取元素距离窗口左侧的距离---------*/
function getPosition(node){
	/*-------获取元素距离父元素左侧的距离-------*/
	var left = node.offsetLeft;
	var top = node.offsetTop;

	/*-------获取父元素-------*/
	var parent = node.offsetParent;

	while(parent != null){
		left += parent.offsetLeft;
		top += parent.offsetTop;
		/*------获取父元素的父元素-----*/
		parent = parent.offsetParent;
	};

	return {left: left, top: top};
};