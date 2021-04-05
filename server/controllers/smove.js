const mongoose = require('mongoose');

//const Smove = require('../../database/Smove.js');

module.exports = {
// this request will get all the data for one full smove, the query will be quite different
  getSmove: async (req, res) => {
    try {
      const fullSmove = await Smove.find();
      res.status(200).json(fullSmove);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  createSmove: async (req, res) => {
    const newSmove = new Smove();
    try {
      await newSmove.save();
      res.status(201).json(newSmove);
    } catch (error) {
      res.status(409).json({ message: error.message })
    }
  }
}
