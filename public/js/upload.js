function upload(data, file, callback){
	var form = new FormData();
	form.append("file", file);
	var xhr = new XMLHttpRequest();
	var url = "/upload?";
	for(var item in data){
		url += item + "=" + data[item] + "&";
	};
	url = url.substr(0, url.length - 1);
	xhr.open("post", url, true);

	xhr.onload = function(e){
		if(xhr.readyState == 4 && xhr.status == 200){
			var result = JSON.parse(xhr.responseText);
			callback(result);
		}
	};
	xhr.send(form);
};