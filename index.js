const express = require("express");
require("dotenv").config();
const connectDB = require("./db/connect");
const app = express();

var cors = require("cors");
const authRouter = require("./routes/auth");
app.use(cors());
app.use(express.json());
// console.log("here ");
app.use("/auth", authRouter);

//Port and Connect to DB
const port = process.env.PORT || 8000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
         console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
      console.log("error =>", error);
  }
};
start();