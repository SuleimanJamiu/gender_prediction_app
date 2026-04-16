const express = require("express");
const router = require("../router/genderizeRoute")
const app = express();

require("dotenv").config();
PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(router);

module.exports = app;