import mongoose from 'mongoose';

const listSchema = mongoose.Schema({

});

const Lists = mongoose.model('Users', listSchema);

export default Lists;