const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  name: String,
  image: String,
  zipcode: Number,
  onSmoveTeam: [String],
  smoves: [
    {
      smoveName: String,
      isCurrentSmove: {
        type: Boolean,
        default: true
      },
      oldAddress: String,
      newAddress: String,
      smoveDate: String,
      favCompanies: [
        {
          companyName: String,
          url: String
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

module.exports = User;
