require("dotenv").config("../.env");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use([morgan("dev"), cors(), express.json()]);

app.get("/health", (_req, res) => {
  //if any case you don't use any obj use a (_) before the obj name
  throw new Error("error");
  res.status(200).json({
    message: "Success",
  });
});

app.get("/health2", (_req, res) => {
  //if any case you don't use any obj use a (_) before the obj name
  throw new Error("error");
  res.status(200).json({
    message: "Success",
  });
});

app.use((_req, _res, next) => {
  //error handler middleware
  const error = new Error("Resource not found");
  error.status = 404;
  next(error);
});

app.use((error, _req, res, _next) => {
  //error handler middleware
  if (error.status) {
    return res.status(error.status).json({
      message: error.message,
    });
  }

  res.status(500).json({ message: "Something went wrong" });
});

module.exports = app;
