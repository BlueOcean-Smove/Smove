const mongoose = require('mongoose');

const listSchema = mongoose.Schema({

});

const Lists = mongoose.model('Lists', listSchema);

module.exports.Lists = Lists;