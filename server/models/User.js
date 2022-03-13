const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
// Schema to create Student model
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max_length: 50,
      unique: true,
    },
    github: {
      type: String,
      required: true,
      max_length: 50,
      unique: true,
    },
    password: {
        type: String,
        requried: true,
       min_length: 2,
       
      },
    projects: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Project',
      },
    ]
   
  },
  {
    toJSON: {
      getters: true,
    },
  }
);


UserSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});


UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = model('User', UserSchema);

module.exports = User;