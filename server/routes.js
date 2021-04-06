const express = require('express');

const {
  getUserInfo,
  createUser,
  updateUser,
  changeAccess
} = require('./controllers/users.js');

const router = express.Router();

router.get('/user/:id', getUserInfo);
router.post('/user', createUser);
router.patch('/user/:id', updateUser);
router.patch('/user/:id/:id', changeAccess);

module.exports = router;
