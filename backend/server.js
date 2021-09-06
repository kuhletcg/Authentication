const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/api/user");
const cors = require("cors");
require("dotenv/config");

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  // () => console.log(`Connected to database...`)
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
userRoutes(app);

// const port = 3000;
// app.listen(port, () => console.log(`Server is running on port ${port}...`));
app.listen(4500, () => console.log(`Server running on port 4500...`));
