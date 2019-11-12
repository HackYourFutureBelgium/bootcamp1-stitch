const express = require("express");
const router = express.Router();

const controller = require("./controller");

// routes =>

/* ------------------- INDEX -------------------*/
// GET  "/"                     => greetings

router.get("", controller.welcome);

/* ------------------- INDEX -------------------*/
// GET  "/all"                     => show all posts

router.get("/all", controller.getAll);

/* ------------------- CREATE -------------------*/
// GET  "/add"                => instructions
// POST "/add"                => Create new post

router.get("/add", controller.getAdd);

router.post("/add", controller.createPost);

/* ------------------- READ -------------------*/
// GET  "/:id"             => View post Info with id ...

router.get("/:id", controller.getId);

/* ------------------- UPDATE -------------------*/
// GET  "/:id/update"     => instructions
// POST "/:id/update"     => update post with id...



// router.get("/:id/update", controller.getIdUpdate);

// router.post("/:id/update", controller.postIdUpdate);

/* ------------------- DELETE -------------------*/
// GET  "/:id/delete"     => instructions
// POST "/:id/delete"     => delete post with id...



router.get("/:id/delete", controller.getIdDelete);

router.post("/:id/delete", controller.postIdDelete);



module.exports = router;