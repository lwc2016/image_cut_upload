function getPosition(node){
	/*------获取节点的位置------*/
	var offsetLeft = node.offsetLeft;
	var offsetTop = node.offsetTop;
	var parentNode = node.parentNode;
	while(parentNode){
		offsetLeft += parentNode.offsetLeft;
		offsetTop += parentNode.offsetTop;
		parentNode = parentNode.parent;
	};
	return {left:offsetLeft, top: offsetTop};
};