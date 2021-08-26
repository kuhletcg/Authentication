const User = require("../../model/user");
const { registerValidation, loginValidation } = require("../../validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../auth");
require("dotenv/config");

const userRoutes = (app) => {
  app.get("/user", async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).send(users);
    } catch (error) {
      res.status(404).send(error);
    }
  });

  app.post("/register", async (req, res) => {
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send(`Email already exists`);

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    try {
      const newUser = await User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      }).save();

      const token = jwt.sign({ id: newUser._id }, process.env.TOKEN_SECRET, {
        expiresIn: 3600,
      });

      res.status(201).json({ token, newUser });
    } catch (error) {
      res.status(400).send(error);
    }
  });

  app.post("/login", async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send(`Email does not exist`);

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(400).send("Email or password is wrong");

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: 3600,
    });
    res.json({ token, user });
  });
};

module.exports = userRoutes;
