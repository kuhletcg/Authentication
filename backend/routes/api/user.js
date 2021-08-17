
const User = require("../../model/user");

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
    try {
      const newUser = await User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      }).save();

      res.status(201).send(newUser);
    } catch (error) {
      res.status(400).send(`${error.keyValue.email} already exists`);
    }
  });
};

module.exports = userRoutes;