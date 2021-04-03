const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

});

const Users = mongoose.model('Users', userSchema);

module.exports.Users = Users;