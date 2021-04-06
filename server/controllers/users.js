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
    const user = req.body;
    if(!mongoose.Types.ObjectId.isValid(email)) {
      return res.status(404).send('No user with that email');
    }
    const updatedUser = await Tasks.findByIdAndUpdate(email, { ...user, _id }, { new: true });
    res.json(updatedUser);
  },

  // this will add or delete friends access to a smove
  changeAccess: async (req, res) => {

  }
}
