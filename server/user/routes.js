const {requireAuth} = require('../lib/auth');
const express = require("express")
const router = express.Router();


const controller = require("./controller")


router.get("/", controller.findAll);
router.get("/:id", controller.findOne);
router.get("/me", controller.authenticate);
router.post("/login", requireAuth, controller.login);
router.post("/signup", controller.create);
 

module.exports = router;