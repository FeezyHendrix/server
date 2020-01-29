/* eslint-disable no-console */

import mongoose from "mongoose";

import constants from "./constants";

mongoose.Promise = global.Promise;

mongoose.set("debug", true); // debug mode on

try {
  mongoose.connect(constants.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} catch (err) {
  mongoose.createConnection(constants.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

mongoose.connection
  .once('open', () => console.log('MongoDB Running'))
  .on('error', e => {
    throw e;
  });



//mongoose.createConnection("mongodb://localhost:27017/tweet-dev", {
 // useNewUrlParser: true,
 // useCreateIndex: true,
 // useUnifiedTopology: true
//});

//const connection = mongoose.connection;
//connection.once("once", () => {
 // console.log(`MongoDB databse connection established successfully`);
//});

//mongoose.connection
  //.once("open", () => console.log("MongoDB Running"))
  //.on("error", e => {
  //  throw e;
  //});

 