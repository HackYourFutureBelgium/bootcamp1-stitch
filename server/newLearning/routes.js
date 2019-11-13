const express = require("express")
const router = express.Router()

const controller = require("./controller")

router.post("/newthingstolearn", controller.createNewLearning);
//router.delete("/:id", controller.NewLearningDelete);
router.get("/", controller.getnewlearning);

module.exports = router;