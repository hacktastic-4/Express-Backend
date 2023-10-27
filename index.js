const express = require("express");
const queryDatabase = require("./database/connect");
const { addDataToDB, addSolarDataToDB } = require("./function");

const app = express();
const port = process.env.PORT || 3000;

const regionRouter = require("./routes/region");
const globalRouter = require("./routes/global");

// const { notFound } = require("./middleware/notFound");

app.use(express.json());

// Routes
app.use("/api/region", regionRouter);
app.use("/api/global", globalRouter);

// app.use(notFound);

const start = async () => {
  try {
    await queryDatabase("SELECT 1"); // A simple query to test the connection
    console.log("Database connected successfully");

    // await addDataToDB();
    // await addSolarDataToDB();

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
