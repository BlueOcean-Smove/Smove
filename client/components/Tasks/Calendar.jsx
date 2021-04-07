import React, { useState, useContext } from 'react';
import axios from 'axios';

const Calendar = () => {
  const { userData, setUserData } = useContext(UserDataContext);

  const email = userData.email;

  const createCalendarLink = () => {
    const firstSection = "https://calendar.google.com/calendar/embed?src="
    const emailAddress = userData.email.slice('@').join('%40')
    const secondSection = "&ctz=America%2FLos_Angeles"
    console.log(firstSection + emailAddress + secondSection);
  }
//`https://calendar.google.com/calendar/embed?src=blueoceansmove%40gmail.com&ctz=America%2FLos_Angeles`
  return (
    <div>
      <iframe src={createCalendarLink()} style={{border: 0, width:"800px", height:"600px", frameborder:"0", scrolling:"no"}}></iframe>
    </div>
  )
}

export default Calendar