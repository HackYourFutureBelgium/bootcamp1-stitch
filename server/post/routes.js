const express = require("express")
const router = express.Router()

const controller = require("./controller")

router.post("/", controller.createPost);

router.delete("/:id", controller.postIdDelete);

//router.get("/getPost", controller.getPost);

router.get("/getPost", controller.getPost);


module.exports = router;