// import express from "express";
const express = require("express");
// essential convertion - convert our express library into the app variable
const app = express();

// Server creation - use inbuild "listen" function to start running our backend server
// listen function hold 2 parameters
// 1) port number - 8080
// 2) callback function to print the server running message
app.listen(8081, () => {
    console.log("Server running");    
})
