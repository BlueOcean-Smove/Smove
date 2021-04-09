import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserDataContext } from '../Data.jsx';

const Calendar = ({ uniqueKey }) => {
  const { userData, setUserData } = useContext(UserDataContext);

  const email = userData.email;

  //makes a link to retrieve the user's google calendar
  const createCalendarLink = () => {
    const firstSection = "https://calendar.google.com/calendar/embed?src="
    const emailAddress = userData.email.split('@').join('%40')
    const secondSection = "&ctz=America%2FLos_Angeles"
    return firstSection + emailAddress + secondSection;
  }

  createCalendarLink();

  //I kept this here just in case
  //`https://calendar.google.com/calendar/embed?src=blueoceansmove%40gmail.com&ctz=America%2FLos_Angeles`
  return (
    <div>
      <iframe key={uniqueKey} src={createCalendarLink()} style={{border: 0, width:"600px", height:"400px", frameborder:"0", scrolling:"no"}}></iframe>
    </div>
  )
}

export default Calendar