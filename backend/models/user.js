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
  },
  password: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

let User = mongoose.model("User", userSchema);
module.exports = User;