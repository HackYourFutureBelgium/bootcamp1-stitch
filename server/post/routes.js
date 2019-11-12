const express = require("express")
const router = express.Router()

const controller = require("./controller")

router.post("/postOnMyTimeLine", controller.createPost);

router.post("/delete", controller.postIdDelete);

//router.get("/getPost", controller.getPost);

router.get("/getPost", controller.getPost);






module.exports = router;