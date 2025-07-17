const express = require("express");
const dbConnection = require("./config/dbconnection");

const app = express();
const port = 8081;

dbConnection();

app.listen(port, () => {
    console.log(`Server running on ${port}`);    
});