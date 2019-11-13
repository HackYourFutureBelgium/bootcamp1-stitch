const express = require("express")
const router = express.Router()

const controller = require("./controller")


router.get("/", controller.findAll);
router.post("/signUp", controller.signUp);
router.post("/update/:id", controller.update);
router.delete("/:id", controller.postIdDelete);

module.exports = router;