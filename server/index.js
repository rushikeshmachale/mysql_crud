import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import db from './model/database.js'
import catagoryRouter from './routes/catagoryRoute.js';
import productRouter from './routes/prductRoute.js'
const app = express();



db.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log('connected to db')
})
app.use(express.json());
app.use(cors());

app.use('/catagory',catagoryRouter)
app.use('/product',productRouter);
app.listen(4000,()=>{
    console.log('listening to 4000');
})
