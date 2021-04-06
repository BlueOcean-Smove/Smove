const express = require('express');

const {
  getUserInfo,
  createUser,
  updateUser
} = require('./controllers/users.js');

const router = express.Router();

router.get('/auth/:email', getUserInfo);
router.post('/auth/', createUser);
router.patch('/user/:email', updateUser);

module.exports = router;
