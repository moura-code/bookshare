const express = require('express')
const app = express()
const cors = require('cors')
const passport = require('passport')
const mongoose = require('mongoose')
const  { conectionDB }  = require('./config/db/conection.js')
const books = require('./routes/routes')
 
require('dotenv').config()
require('./config/passport')(passport);

app.use(passport.initialize());

// Instead of using body-parser middleware, use the new Express implementation of the same thing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Allows our Angular application to make HTTP requests to Express application
app.use(cors());

app.use("/api/books",books)


const start = async () => {
  try {
    // conect to database
    conectionDB();
    app.listen(5000, () =>
      console.log(`Server is listening on port 5000...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start()