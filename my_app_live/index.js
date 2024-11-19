const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use("", require("./routes/routes"));

app.listen(3000, () => {    
    console.log("Server is running on port 3000");
})