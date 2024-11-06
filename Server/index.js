import express from 'express'
import 'dotenv/config'
import logger from 'morgan';
import cors from './config/cors.config.js'
import { connectDB } from './config/database.js';
const app = express();

//Middlewares
app.use(cors)


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

(async function startServer(){
    try {
    await connectDB();
    const port = process.env.PORT
    app.listen(port,()=>{
        console.log(`Server running at port ${port}`)
    })  
    } catch (error) {
        console.log(error.message);
    }
})()


