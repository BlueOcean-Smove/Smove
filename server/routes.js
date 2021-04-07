const express = require('express');

// get controllers for the routes
const {
  getUserInfo,
  createUser,
  updateUser
} = require('./controllers/users.js');

const router = express.Router();

// set the routes for database access
router.get('/auth/:email', getUserInfo);
router.post('/auth/', createUser);
router.patch('/user/:email', updateUser);

module.exports = router;
