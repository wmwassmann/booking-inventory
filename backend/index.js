  
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import employeeRouter from './routes/employeeRoute.js';
import stockRouter from './routes/stockRoute.js';

import dotenv from 'dotenv';
import connectDB from './config/db.js';

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
app.use('/employee', employeeRouter)
app.use('/inventory', stockRouter)


const ATLAS_URI = process.env.ATLAS_URI
const PORT = process.env.PORT

connectDB()

// connection.once('open', ()=> {
//     console.log('connected established successfully')
// })

mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify: false })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

  if (process.env.NODE_ENV === 'production') {
      app.use(express.static('../build'))
  }
