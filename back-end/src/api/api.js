import express from 'express';
import { emailSend } from '../Me/Controllers/Email.controllers.js';
import { dataAll } from '../Me/Controllers/Me.controllers.js';


const api = express.Router();
api.get('/listData',dataAll);
api.post('/sendForm',emailSend);

export default api;