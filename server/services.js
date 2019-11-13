const express = require('express');
const router = express.Router();


const user = require("./user");
console.log("i am on services")
router.use("/user", user);

const post = require("./post");
router.use("/post", post);

const connection = require("./connection");
router.use("/connection", connection);

const newLearning = require("./newLearning");
router.use("/newLearning", newLearning);


/*
const search = require("./search");
router.use("/search", search);

const login = require("./login");
router.use("/login", login);

const signup = require("./signup");
router.use("/signup", signup);



const notification = require("./notification");
router.use("/notification", notification);
*/
module.exports = router;