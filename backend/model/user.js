const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    unique: true,
    min: 6,
    max: 255,
  },
  password: {
    type: Number,
    min: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

let User = mongoose.model("User", userSchema);
module.exports = User;
