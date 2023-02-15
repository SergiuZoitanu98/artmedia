const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      },
      message: "Invalid email format",
    },
  },
  password:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  }
});

const user = mongoose.model('user',userSchema)

module.exports = user
