# Introducing Smove

Smove is a one-stop-platform for users to manage their move with ease! <br />
Smove integrates all the pieces of moving including finding vendors, tracking tasks and inventory, and collaborating with family & friends.

Built with:
* [React (Hooks)](https://reactjs.org/)
* [Styled Components](https://styled-components.com/)
* [Express](https://expressjs.com/)
* [MongoDB Atlas](www.mongodb.com)
* [React-Router](https://reactrouter.com/)

Testing:
* [Jest](https://jestjs.io/)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

APIs
* [Yelp](https://www.yelp.com/developers)
* [Google Maps](https://developers.google.com/maps)
* [Google Calendar](https://developers.google.com/calendar)
* [Google Sign In](https://developers.google.com/maps)

Team
=============
<b>Landing Page, User Profile & Login Authorization</b>
* [Pete Cowles](https://github.com/KilgoreTrout9)
* [Dani Tian](https://github.com/danitian)

<b>Task List & Calendar</b>
* [Jesse Smith](https://github.com/jessesmith-13)
* [John Kwak](https://github.com/johnkwak08)

<b>Inventory & Nav</b>
* [Greta Schock](https://github.com/grsc0529)
* [Bryan Clark](https://github.com/bryancWA)

<b>Google Maps & Local Moving Services</b>
* [Ming Wen](https://github.com/mingwencode)
* [Alex Duncan](https://github.com/monkeymedic26)

Requirements
=============
<h3>Installing Dependencies</h3>

From within the root directory:<br>
`npm install`

Development
=============
From within the root directory:

To run server<br>
`npm start`

To run webpack build<br>
`npm run build`

To run webpack watch<br>
`npm run watch`

To run tests<br>
`npm test`

Demo
=============

## User Authentication:<br>
Sign In with Google

![Screenshot of Sign In Page](https://github.com/BlueOcean-Smove/Smove/blob/1d6e9640a81e79b44197d39e9d18646f260cb528/SmoveScreenshots/Screen%20Shot%202021-04-10%20at%2010.05.57%20AM.png)

## Profile Page:<br>
![Screenshot of Profile Page](https://github.com/BlueOcean-Smove/Smove/blob/1d6e9640a81e79b44197d39e9d18646f260cb528/SmoveScreenshots/Screen%20Shot%202021-04-10%20at%2010.37.53%20AM.png)
From the user's Profile page, the user can:
- Create a new Smove
- View current Smove
- View list of all the user's moves
- Toggle the current Smove to any existing Smove
- Add a team member to the current Smove, which creates a new User

## Task List<br>

From the Task List page, the user can:
- Create, Edit, or Delete any Task
![Screenshot of Add Task Page](https://github.com/BlueOcean-Smove/Smove/blob/1d6e9640a81e79b44197d39e9d18646f260cb528/SmoveScreenshots/Screen%20Shot%202021-04-10%20at%2010.15.54%20AM.png)
- View the user's Google Calendar
- Add a task to the user's Google Calendar
![Screenshot of Task List Page](https://github.com/BlueOcean-Smove/Smove/blob/1d6e9640a81e79b44197d39e9d18646f260cb528/SmoveScreenshots/Screen%20Shot%202021-04-10%20at%2010.16.09%20AM.png)
- Navigate to the webpage of a designated task vendor


## Inventory<br>
![Screenshot of Inventory Page](https://github.com/BlueOcean-Smove/Smove/blob/1d6e9640a81e79b44197d39e9d18646f260cb528/SmoveScreenshots/Screen%20Shot%202021-04-10%20at%2010.17.23%20AM.png)
From the Inventory page, the user can:
- Add a "box" to the move inventory, with auto-incrementing box number
- Edit any box in the inventory
- Delete any box from the inventory 

![Screenshot of Add Box](https://github.com/BlueOcean-Smove/Smove/blob/1d6e9640a81e79b44197d39e9d18646f260cb528/SmoveScreenshots/Screen%20Shot%202021-04-10%20at%2010.16.23%20AM.png)

## Local Moving Services<br>
![Screenshot of Local Moving Services Page](https://github.com/BlueOcean-Smove/Smove/blob/1d6e9640a81e79b44197d39e9d18646f260cb528/SmoveScreenshots/Screen%20Shot%202021-04-10%20at%2010.27.35%20AM.png)
From the Local Moving Services page, the user can:
- Use keywords to search for businesses
- Sort search results
- Display results on a map with pins and as cards in a carousel
- Favorite any business, which will be made available when creating a new task
