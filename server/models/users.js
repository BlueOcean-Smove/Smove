import mongoose from 'mongoose';

const userSchema = mongoose.Schema({

});

const Users = mongoose.model('Users', userSchema);

export default Users;