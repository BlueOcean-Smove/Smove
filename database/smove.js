const mongoose = require('mongoose');

const smoveSchema = mongoose.Schema({

});

const Smoves = mongoose.model('Smoves', smoveSchema);

module.exports.Smoves = Smoves;