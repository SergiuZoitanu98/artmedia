const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

require('dotenv').config()

router.post('/register', async (req, res) => {
  const { name, email, password,surname } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name,surname, email, password: hashedPassword });
    await newUser.save();
    const token = jwt.sign({ email: newUser.email, name: newUser.name }, process.env.SECRET);
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Bad credentials' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Incorrect password' });
    }
    const token = jwt.sign({ email: user.email, name: user.name, surname: user.surname }, process.env.SECRET);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
