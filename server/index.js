import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import smoveRoutes from './routes.js';

const app = express();
const PORT = 1128;

app.use(bodyParser.json({ limit: "30mb", extended : true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended : true}));
app.use(cors());

app.use('/smove', postRoutes);

mongoose.connect(
  'mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true}
)
  .then(()=> app.listen(PORT, () => {
    console.log(`listening with mongoose on port ${PORT}`);
  }))
  .catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify', false);