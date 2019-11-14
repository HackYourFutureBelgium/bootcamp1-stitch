const express = require('express');
const router = express.Router();


const user = require("./user");
router.use("/user", user);

const post = require("./post");
router.use("/post", post);

const connection = require("./connection");
router.use("/connection", connection);

const newLearning = require("./newLearning");
router.use("/newLearning", newLearning);

const notification = require("./notification");
router.use("/notification", notification);


module.exports = router;