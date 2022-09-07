const express = require("express");

const connect = require("./configs/db");

const postController = require("./controllers/post.controller");
const commentController = require("./controllers/comment.controller");

const app = express();

app.use("/posts", postController);
app.use("/comments", commentController);

app.use(express.json());
app.listen(2345, async function () {
    try {
      await connect();
      console.log("listening on port 2345");
    } catch (e) {
      console.log(e.message);
    }
  });