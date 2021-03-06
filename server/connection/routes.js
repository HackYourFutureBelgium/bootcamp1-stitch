const express = require("express")
const router = express.Router()

const controller = require("./controller")

router.post("/", controller.createConnection);

router.delete("/:id", controller.connectionDelete);

router.get("/", controller.getConnection);





module.exports = router;