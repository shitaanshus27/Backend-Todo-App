const express = require("express");
const app = express();

//load config from env file

require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API

const todoRoutes = require("./routes/todos");

//mount the todo ASPI require
app.use("/api/v1", todoRoutes);

//server start

app.listen(PORT, () => {
  console.log(`Server Started Successfully ${PORT}`);
});

//connect to the database

const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/", (req, res) => {
  res.send(`<h1>Server Started</h1>`);
});
