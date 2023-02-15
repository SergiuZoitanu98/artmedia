const express = require("express");
const router = express.Router();
const Post = require("../../models/post");
const User = require("../../models/user");
const authenticateToken = require('../../jwt-middleware/jwt-middleware')(User)
//get all posts
router.get("/",authenticateToken, async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//create post
router.post("/createPost",authenticateToken, async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//update post
router.patch("/updatePost/:id", authenticateToken,getPost, async (req, res) => {
  if (req.body.title != null) {
    res.post.title = req.body.title;
  }
  if (req.body.description != null) {
    res.post.description = req.body.description;
  }
  try {
    const updatedPost = await res.post.save();
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//delete post
router.delete("/deletePost/:id", authenticateToken,getPost, async (req, res) => {
  try {
    await res.post.remove();
    res.json({ message: "Post deleted" });
  } catch (error) {
    error.status(500).json({ message: error.message });
  }
});

//get one post
router.get("/getPost/:id", getPost,authenticateToken, (req, res) => {
  res.json(res.post);
});

async function getPost(req, res, next) {
  let post;
  try {
    post = await Post.findById(req.params.id);
    if (post == null) {
      return res.status(404).json({ message: "Cannot find post" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.post = post;
  next();
}

module.exports = router;
