const mongoose = require('mongoose');

const Tasks = require('../../database/tasks.js');

module.exports = {
  createTask: async (req, res) => {
    const task = req.body;
    const newTask = new Tasks(task);
    try {
      await newTask.save();
      res.status(201).json(newTask);
    } catch (error) {
      res.status(409).json({ message: error.message })
    }
  },

  updateTask: async (req, res) => {
    const { id: _id } = req.params;
    const task = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send('No task with that id');
    }
    const updatedTask = await Tasks.findByIdAndUpdate(_id, { ...task, _id }, { new: true });
    res.json(updatedTask);
  },

  deleteTask: async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send('No task with that id');
    }
    await Tasks.findByIdAndRemove(id);
    res.json({ message: 'Task deleted' });
  }
}
