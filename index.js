const express = require("express");
const router = require("./router/genderizeRoute")
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', router);

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {  console.log(`Server is running on port ${PORT}`);
});