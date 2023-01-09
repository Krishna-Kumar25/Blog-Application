import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

//connection
import connection from './database/db.js';
import router from './Router/route.js';


const app = express();


app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);

const Port=8000;

app.listen(Port,()=> console.log(`server is running successfully at ${Port}`));

connection();