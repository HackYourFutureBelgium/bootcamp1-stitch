const express = require("express")
const router = express.Router()

const controller = require("./controller")

router.post("/", controller.createNotification);

router.delete("/:id", controller.deleteNotification);

router.get("/", controller.getNotification);
//router.get("/:id", controller.getOneNotification);






module.exports = router;