const express = require("express");
const router = require("./router/genderizeRoute")
const app = express();
PORT = process.env.PORT || 3000;

require("dotenv").config();
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use('/api', router);

app.listen(PORT, ()=>{
    console.log("Application running on port", PORT)
})