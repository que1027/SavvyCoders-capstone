import mongoose from "mongoose";
// 'Import' the Express module instead of http
import express from "express";

import dotenv from "dotenv";
//load enviroment variables from .env file
//import APIname from ".router/apiname.js"
dotenv.config();

//get the PORT from the environment variable OR use 8080 as default
const PORT = process.env.PORT || 8080;
//Initialize the Express application
const app = express();

mongoose.connect(process.env.MONGODB,{
    //Configuration options to remove depreciation warnings, just include them to remove clutter
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

//ask about this code
db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
    "open",
    console.log.bind(console, "Successfully opened connection to Mongo!")
);
//this too
// Logging Middleware
const logging = (request, response, next) => {
  console.log(
    `${request.method} ${request.url} ${new Date().toLocaleString("en-us")}`
  );
  next();
};
//CORS Middleware
const cors = (request, response, next) => {
    response.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With, content-type, Accept,Authorization, Origin"
    );
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
    );
    response.setHeader("Access-Control-Allow-Credentials", true);
    next();
};
app.use(cors);
app.use(express.json());
app.use(logging);
app.get("/status", (request, response) => {
    //Create the headers for response by default 200
    //create the response body
    //End and return the response
    response.send(JSON.stringify({ massage: "Service healthy"}));
});
//app.use("/apiname", apiname);
//Tell the Express app to start listening and log it
app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));
