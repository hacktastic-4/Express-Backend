const express = require("express");
const queryDatabase = require("./database/connect");
const addDataToDB = require("./function");

const app = express();
const port = process.env.PORT || 3000;

// const JudgeRouter = require("./routes/judge");
// const TeamRouter = require("./routes/teams");
// const ParameterRouter = require("./routes/parameters");
// const ScoreRouter = require("./routes/score");
// const CompetitionRouter = require("./routes/competition");
// const ResultRouter = require("./routes/result");

// const { notFound } = require("./middleware/notFound");

app.use(express.json());

// Routes
// app.use("/api/v1/judge", JudgeRouter);
// app.use("/api/v1/team", TeamRouter);
// app.use("/api/v1/parameter", ParameterRouter);
// app.use("/api/v1/score", ScoreRouter);
// app.use("/api/v1/competition", CompetitionRouter);
// app.use("/api/v1/result", ResultRouter);

// app.use(notFound);

const start = async () => {
  try {
    await queryDatabase("SELECT 1"); // A simple query to test the connection
    console.log("Database connected successfully");

    // await addDataToDB();

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
