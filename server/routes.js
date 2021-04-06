const express = require('express');

const {
  getUserInfo,
  createUser,
  updateUser,
  changeAccess
} = require('./controllers/users.js');

const router = express.Router();

router.get('/auth/:email', getUserInfo);
router.post('/auth/', createUser);
router.patch('/user/:id', updateUser);
router.patch('/user/:id/:id', changeAccess);

module.exports = router;