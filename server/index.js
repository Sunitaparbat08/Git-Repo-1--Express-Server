const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const { jwtAuth } = require("./utils/jwtauth");

// cmd> npm install cors
//const cors = require("cors");
//app.use(cors());

/*
// middleware to enable CORS -- add following resp headers
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "X-PINGOTHER,Content-Type");
	next();
});
*/
app.use(express.json());
//app.use(jwtAuth);
app.use("/user", userRouter);


const port = 3000;
app.listen(port, "0.0.0.0", () => {
	console.log("server ready at port", port);
});
