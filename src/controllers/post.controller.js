const express = require("express");

const Post = require("../models/post.model");

const crudController = require("./crud.controller");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    // const tags = await Post.find({tag_ids: "dskfgdskf"}).lean().exec()
    const posts = await Post.find()
      .populate({ path: "user_id", select: ["first_name", "last_name"] })
      .populate({ path: "tag_ids", select: "name" })
      .lean()
      .exec();

    return res.send(posts);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("", crudController(Post).post);





module.exports = router;
