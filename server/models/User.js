const { Schema, model } = require('mongoose');

// Schema to create Student model
const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      max_length: 50,
    },
    lastName: {
      type: String,
      required: true,
      max_length: 50,
    },
    github: {
      type: String,
      required: true,
      max_length: 50,
    },
    password: {
        type: String,
        requried: true,
       min_length: 2,
      },
   
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Student = model('student', UserSchema);

module.exports = Student;