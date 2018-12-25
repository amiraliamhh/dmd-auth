import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import '@babel/polyfill';

import { router as UserRouter } from './route/user';
import { router as DashboardRouter } from './route/dashboard';
import { router as WidgetRouter } from './route/widget';
import { router as ProxyRouter } from './route/proxy';

require('./passport/index')

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/auth', { useNewUrlParser: true },(err: Error) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Successfully connected to database.');
  }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/api/v1.0/dashboard/', DashboardRouter)
app.use('/api/v1.0/widget/', WidgetRouter)
app.use('/api/v1.0/alexawatcher/', ProxyRouter)
app.use('/api/v1.0/', UserRouter)

app.listen(process.env.PORT || 4000, (err: Error) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Listening on port ${process.env.PORT || 4000}`)
  }
})
