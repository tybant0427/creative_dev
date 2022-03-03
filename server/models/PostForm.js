const { Schema, model } = require('mongoose');

const PostSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
        max_length: 50,
      },
      description:{

      }
      respitoryLink: {
        type: String,
        required: true,
        max_length: 50,
        unique: true,
      },
      liveLink: {
          type: String,
          requried: true,
         min_length: 2,
         unique: true,
        },
     
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );
  
  
 
  
  
  const User = model('User', UserSchema);
  
  module.exports = User;