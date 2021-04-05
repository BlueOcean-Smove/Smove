const axios = require('axios')
const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const morgan = require('morgan');

const smoveRoutes = require('./routes.js');
const config = require('../config.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
app.use(express.static(PUBLIC_DIR));

app.use('/', smoveRoutes);

const options = {
  url: 'https://api.yelp.com/v3/businesses/',
  headers: {
    Authorization: config.YELP_TOKEN
  }
}

mongoose.connect(
  'mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true}
)
  .then(()=> app.listen(PORT, () => {
    console.log(`listening with mongoose on port ${PORT}`);
  }))
  .catch((error)=> console.log(error.message));

//=======Yelp API Call==================

app.post('/business', (req, res) => {
   const {term, location} = req.body;
  axios.get(`${options.url}search?term=${term}&location=${location}&limit=10&radius=40000`, options)
  .then(data=>res.send(data.data))
  .catch(()=>res.send(500))
 })

//========================================


mongoose.set('useFindAndModify', false);

mongoose.set('useFindAndModify', false);
