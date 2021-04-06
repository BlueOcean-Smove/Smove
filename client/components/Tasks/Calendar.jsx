
import React, { useState } from 'react';
import axios from 'axios';
// import { google } from 'googleapis';

const Calendar = ({text}) => {
  
  const [clickText, setClickText] = useState('');
  const [changeText, setChangeText] = useState('');

  const makeEvent = () => {
    axios.post('/api/newEvent')
  }

  const handleChange = ({target}) => {
    const { value } = target;
    setChangeText(value);
    // console.log('test fired')
  }

  return (
    <div>
      <button data-testid="button" onClick={makeEvent}>
        Make an Event!
      </button>
      <input data-testid="input" value={changeText} onChange={handleChange}>
      </input>
      <p data-testid="displayText">
        {changeText}
        {text}
      </p>
      <iframe src="https://calendar.google.com/calendar/embed?src=blueoceansmove%40gmail.com&ctz=America%2FLos_Angeles" style={{border: 0, width:"800px", height:"600px", frameborder:"0", scrolling:"no"}}></iframe>
    </div>
  )
}

export default Calendar