const mongoose = require('mongoose');

const Users = require('../../database/users.js');

module.exports = {
  getUserInfo: async (req, res) => {
    const { email } = req.params;
    try {
      const userInfo = await Users.findOne({email: email}).exec();
      res.status(200).json(userInfo);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  createUser: async (req, res) => {
    console.log(req.body);
    const user = req.body;
    const newUser = new Users(user);
    try {
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(409).json({ message: error.message })
    }
  },

  updateUser: async (req, res) => {
    const { email } = req.params;
    const newSmovesArray = req.body.data;

    const filter = {email: email};
    const update = {smoves: newSmovesArray};
    const updatedUser = await Users.findOneAndUpdate(filter, update, {
      new: true
    });
    res.json(updatedUser);
  },

  // this will add or delete friends access to a smove
  changeAccess: async (req, res) => {

  }
}
