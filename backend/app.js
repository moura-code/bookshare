const express = require('express')
const app = express()

const mongoose = require('mongoose')
const  { conectionDB }  = require('./db/conection.js')
const books = require('./routes/routes')

require('dotenv').config()
// conect to database


app.use(express.json())



app.use("/api/books",books)


const start = async () => {
  try {
    conectionDB();
    app.listen(5000, () =>
      console.log(`Server is listening on port 5000...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start()