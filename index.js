const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

require("dotenv").config();
const mongoString = process.env.DATABASE_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoString);
    const database = mongoose.connection;

    database.on("error", (error) => {
      console.log(error);
    });

    database.once("connected", () => {
      console.log("Database Connected");
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const app = express();

app.use(express.json());
app.use("/api", routes);

connectDB().then(() => {
  app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
  });
});
