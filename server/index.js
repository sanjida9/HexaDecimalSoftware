const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello!");
});

// create api
app.get("/getData", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      res.json("Error occured!");
    });
});

app.listen(port, () => {
  console.log(`app listening on port :${port}`);
});
