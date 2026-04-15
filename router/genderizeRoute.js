const express = require("express");
const checkGender = require("../controller/genderizeController");

const router = express.Router();

router.get('/classify', checkGender)


module.exports = router;