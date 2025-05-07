const db = require("../utils/dbpool");
const { apiSuccess, apiError } = require("../utils/apiresult");
const express = require("express");
const router = express.Router();

//GET/All quote
router.get("", (req, resp) => {
	db.query("SELECT * FROM quote", (err, results) => {
		if (err) return resp.send(apiError(err));
		resp.send(apiSuccess(results));
	});
});
// //POST/content/quote
// router.get("/content", (req, resp) => {
// 	db.query("SELECT DISTINCT content FROM quote", (err, results) => {
// 		if (err) return resp.send(apiError(err));
// 		const categories = results.map((obj) => obj.category);
		
// 		resp.send(apiSuccess());
// 	});
// });


module.exports = router;
