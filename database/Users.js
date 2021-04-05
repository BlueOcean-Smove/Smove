const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  googleID: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  image: String,
  zipcode: Number,
  onSmoveTeam: [String],
  smoves: [
    {
      smoveName: String,
      isCurrentSmove: Boolean,
      oldAddress: String,
      newAddress: String,
      favCompanies: [
        {
          companyName: String,
          url: String,
        }
      ],
      tasks: [
        {
          taskName: String,
          location: String,
          startDate: String,
          endDate: String,
          assignedTo: [String],
          category: String,
          status: String,
          company: {
            companyName: String,
            url: String,
          }
        }
      ],
      inventory: [
        {
          boxNum: Number,
          originRoom: String,
          destinationRoom: String,
          boxPriority: String,
          notes: String,
        }
      ],
      moveTeam: [String],
    }
  ],
});

const User = mongoose.model('User', userSchema);

module.exports.User = User;