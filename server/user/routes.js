const express = require("express")
const router = express.Router()

const controller = require("./controller")


router.get("", controller.welcome);

router.get("/findAll" , controller.findAll);
router.post("/signUp", controller.signUp);
//router.post("/update/:id", controller.update);
router.post("/update", controller.update);
router.post("/delete", controller.postIdDelete);

module.exports = router;