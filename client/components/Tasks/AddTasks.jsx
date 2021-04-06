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
    </div>
  )
}

export default Calendar