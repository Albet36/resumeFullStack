import express from 'express';
import { dataAll } from '../Me/Controllers/Me.controllers.js';


const api = express.Router();
api.get('/listData',dataAll);

export default api;