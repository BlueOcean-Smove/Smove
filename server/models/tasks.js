import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({

});

const Tasks = mongoose.model('Users', taskSchema);

export default Tasks;