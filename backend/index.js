const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT;
const userRoute = require('./routes/user');

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB Connection Successful'))
.catch((err) => {
    console.log(err)
});

app.use(express.json());

app.use("/api/user", userRoute);

app.listen(PORT, () => {
    console.log(`server is running! on port ${PORT}`)
});