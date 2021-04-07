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

app.post('/api/newEvent', (req, res) => {
  const { body } = req;
  const { summary, location, description, eventStartTime, eventEndTime} = body;
  // eventEndTime = new Date(eventEndTime).setMinutes(59);
  
  // const eventStartTime = new Date();
  // eventStartTime.setDate(eventStartTime.getDay() + 2);
  // const eventEndTime = new Date();
  // eventEndTime.setDate(eventEndTime.getDay() + 2);
  // console.log(eventStartTime, eventEndTime);
  //2021-04-05T03:21:50.797Z
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
    colorId: 1
  };

  console.log(event);
  calendar.freebusy.query({
    resource: {
      timeMin: eventStartTime,
      timeMax: eventEndTime,
      timeZone: 'America/Denver',
      items: [{ id: 'primary' }],
    }
  }, 
  (err, res) => {
    if (err) return console.error('Free Busy Query Error: ', err)

    const eventsArr = res.data.calendars.primary.busy

    if (eventsArr.length === 0) return calendar.events.insert({calendarId: 'primary', resource: event},
      err => {
        if (err) return console.error('Calendar Event Creation Error: ', err)

        return console.log('Calendar Event Created!')
    })
    return console.log('Sorry I\'m Busy')
  })
})

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
  .catch(()=>res.sendStatus(500))
 })

//========================================


mongoose.set('useFindAndModify', false);
