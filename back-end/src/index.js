import express from 'express';
 import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from'body-parser';
import { db } from './db/db.js';
import api from './api/api.js';

dotenv.config();
const app = express();
app.use(cors());

app.use(bodyParser.json({ extends : true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',api);
 db();
app.listen(process.env.PORT, () => {console.log(`localhost:${process.env.PORT}`)});