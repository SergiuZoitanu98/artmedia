const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const jwt = require('jsonwebtoken')
require('dotenv').config()

router.post("/register", async (req, res) => {
  const neUser = new User(req.body);
  try {
    await neUser.save();
    res.status(201).json(neUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    if (user.password !== password) {
      res.json({ message: "Incorrect password" });
    }
    const token = jwt.sign({email:user.email},process.env.SECRET)
    res.send({token})
} catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
