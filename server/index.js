const axios = require('axios')
const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const morgan = require('morgan');
const { google } = require('googleapis');
const smoveRoutes = require('./routes.js');
const config = require('../config.js');

const app = express();
const PORT = 3000;
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

app.use(express.json());
app.use(cors());

const { OAuth2 } = google.auth
const oAuth2Client = new OAuth2(
  config.CLIENT_ID,
  config.CLIENT_SECRET,
)

oAuth2Client.setCredentials({
  refresh_token: config.REFRESH_TOKEN
})
const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });
  
//Post to the Google Calendar API
app.post('/api/newEvent', (req, res) => {
  const { body } = req;
  const { email, summary, location, description, eventStartTime, eventEndTime} = body;

  const event = {
    summary: summary,
    location: location,
    description: description,
    start: {
      dateTime: eventStartTime,
      timeZone: 'America/Denver'
    },
    end: {
      dateTime: eventEndTime,
      timeZone: 'America/Denver'
    },
    attendees: [
      {
        email: email
      },
    ],
    colorId: 1
  };

  calendar.events.insert({calendarId: 'primary', resource: event})
    .then(() => console.log('Calendar event inserted'))
    .catch(err => console.log('error posting a calendar event', err));
})


app.use(express.static(PUBLIC_DIR));

app.use('/', smoveRoutes);

const options = {
  url: 'https://api.yelp.com/v3/businesses/',
  headers: {
    Authorization: config.YELP_TOKEN
  }
}

// connect to the Mongo Database
mongoose.connect(
  config.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}
)
  .then(()=> app.listen(PORT, () => {
    console.log(`listening with mongoose on port ${PORT}`);
  }))
  .catch((error)=> console.log(error.message));

//=======Yelp API Call==================

app.post('/business', (req, res) => {
   const {term, location, sort_by} = req.body;
  axios.get(`${options.url}search?term=${term}&location=${location}&limit=10&radius=40000&sort_by=${sort_by}`, options)
  .then(data=>res.send(data.data))
  .catch(()=>res.sendStatus(500))
 })

//========================================


mongoose.set('useFindAndModify', false);
