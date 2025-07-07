const express = require("express");
const logger = require("morgan");
const app = express();
const connectToMongoDB = require("./database/connectToMongoDB");
const PORT = 3000;

app.use(express.json());
app.use(logger("dev"));

app.listen(PORT, () => {
    console.log(`server is on port ${PORT}...`);
  
    connectToMongoDB();
  });
  