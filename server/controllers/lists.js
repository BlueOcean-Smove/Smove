const mongoose = require('mongoose');

const Lists = require('../../database/lists.js');


module.exports = {
  createList: async (req, res) => {
    const list = req.body;
    const newList = new Lists(list);
    try {
      await newList.save();
      res.status(201).json(newList);
    } catch (error) {
      res.status(409).json({ message: error.message })
    }
  },

  updateList: async (req, res) => {
    const { id: _id } = req.params;
    const list = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send('No list with that id');
    }
    const updatedList = await Lists.findByIdAndUpdate(_id, { ...list, _id }, { new: true });
    res.json(updatedList);
  },

  deleteList: async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send('No list with that id');
    }
    await Lists.findByIdAndRemove(id);
    res.json({ message: 'List deleted' });
  }
}
