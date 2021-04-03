const mongoose = require('mongoose');

const Users= require('../../database/users.js');

module.exports = {
  getUserInfo: async (req, res) => {
    const { id: _id } = req.params;
    try {
      const getUserInfo = await users.Users(id);
      res.status(200).json(getUserInfo);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  createUser: async (req, res) => {
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
    const { id: _id } = req.params;
    const user = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send('No user with that id');
    }
    const updatedUser = await Tasks.findByIdAndUpdate(_id, { ...user, _id }, { new: true });
    res.json(updatedUser);
  },

  // this will add or delete friends access to a smove
  changeAccess: async (req, res) => {

  }
}
