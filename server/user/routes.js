const express = require("express")
const router = express.Router()

const controller = require("./controller")


router.get("/", controller.findAll);
router.post("/signup", controller.signUp);
router.post("/update/:id", controller.update);///need to work 
router.delete("/:id", controller.postIdDelete);

module.exports = router;