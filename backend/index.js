  
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import dotenv from 'dotenv';
import connectDB from './config/db.js';


import employeeRouter from './routes/employeeRoute.js';
import stockRouter from './routes/stockRoute.js';

const app = express();
const connection = mongoose.connection;

const result = dotenv.config() 

// error on result from configuration

if (result.error) {
    throw result.error
}


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


// Routing to unique database endpoints
app.use('/inventory', employeeRouter)
app.use('/inventory', stockRouter)
// app.use('', )

const ATLAS_URI = process.env.ATLAS_URI
const PORT = process.env.PORT

connectDB()

connection.once('open', ()=> {
    console.log('connected established successfully')
})

mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

  mongoose.set('useFindAndModify', false);

  if (process.env.NODE_ENV === 'production') {
      app.use(express.static('../build'))
  }
