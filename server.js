const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());

// Publish webhook
app.use("/v1/on-publish", (req, res) => {
  console.log("new publish event happened...");
  res.sendStatus(200);
});

// Unpublish webhook
app.use("/v1/on-unpublish", (req, res) => {
  console.log("new un-publish event happened...");
  res.sendStatus(200);
});

// (Optional) Student routes
// app.use("/v1/students", studentRouter);

app.listen(PORT, () => {
  console.log(`server is up and running at ${PORT}..`);
});