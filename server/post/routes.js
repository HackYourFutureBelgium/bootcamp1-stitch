const express = require("express")
const router = express.Router()

const controller = require("./controller")

router.post("/", controller.createPost);

router.delete("/:id", controller.postIdDelete);

router.get("/", controller.getPost);


module.exports = router;