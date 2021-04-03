const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const morgan = require('morgan');

const smoveRoutes = require('./routes.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json({ limit: "30mb", extended : true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended : true}));
app.use(cors());

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
app.use(express.static(PUBLIC_DIR));

app.use('/smove', smoveRoutes);

mongoose.connect(
  'mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true}
)
  .then(()=> app.listen(PORT, () => {
    console.log(`listening with mongoose on port ${PORT}`);
  }))
  .catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify', false);

