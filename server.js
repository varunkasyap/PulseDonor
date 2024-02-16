const express=require('express');
const dotenv= require('dotenv');
const colors=require('colors');
const morgan= require('morgan');
const cors= require('cors');
const connectDB = require('./config/db');
//dotenv config
dotenv.config();

//mongodb
connectDB();

//rest object
const app=express();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//routes
app.use('/test',require('./routes/testRoutes'));
app.use('/auth',require('./routes/authRoute'));

//port
const PORT=process.env.PORT || 8080;

//listen
app.listen(PORT,()=>{
    console.log(`Node server running in ${process.env.DEV_MODE} on ${PORT}`.bgBlue.white);

})