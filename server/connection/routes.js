const express = require("express")
const router = express.Router()

const controller = require("./controller")

router.post("/createConnection", controller.createConnection);

router.post("/delete", controller.connectionDelete);

router.get("/getConnection", controller.getConnection);












module.exports = router;