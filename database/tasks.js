const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({

});

const Tasks = mongoose.model('Tasks', taskSchema);

module.exports.Tasks = Tasks;