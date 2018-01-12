const express = require("express");
const path = require("path");
const app = require("app");

/*---------配置静态资源路径---------*/
app.use(express.static(path.join(__dirname, "public/")));

/*---------捕获404错误--------*/
app.use((req, res, next)=>{
	let err = new Error("Error: 404, the source is not found!");
	err.status = 404;
	next(err);
});

/*---------捕获500错误-------*/
app.use((err, req, res, next)=>{
	res.status(err.status || 500).send(err.message);

	next();
});

module.exports = app;
