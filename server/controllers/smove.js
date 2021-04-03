import mongoose from 'mongoose';

import Smove from '../models/smove.js';

// this request will get all the data for one full smove, the query will be quite different
export const getSmove = async (req, res) => {
  try {
    const fullSmove = await Smove.find();
    res.status(200).json(fullSmove);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createSmove = async (req, res) => {
  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
