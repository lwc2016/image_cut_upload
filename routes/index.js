const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const gm = require("gm");

const storage = multer.diskStorage({
	destination: (req, file, cb)=>{
		cb(null, "temp/");
	},
	filename:(req, file, cb)=>{
		let originalname = file.originalname;
		let originalname_arr = originalname.split(".");
		let ext = originalname_arr[originalname_arr.length - 1];
		let filename = Date.now() + "." + ext;
		cb(null, filename);
	}
});
const upload = multer({storage});
router.post("/upload", upload.single("file"), (req, res,next)=>{
	let img_path = "public/img/" + req.file.filename;
	let width = req.query.width;
	let height = req.query.height;
	let top = req.query.top;
	let left = req.query.left;
	gm(req.file.path).crop(width, height ,left, top).write(img_path, (err)=>{
		res.send({code:0, result: `img/${req.file.filename}`});
	});
});

module.exports = router;