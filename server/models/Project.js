const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ProjectSchema = new Schema(
    {
      author: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true,
        maxlength: 20,
      },
      description:{
        type: String,
        required: true,
        minlength: 5,
      },
      respitoryLink: {
        type: String,
        required: true,
        
        
      },
      liveLink: {   
          type: String,
          requried: true,
         
         
        },
        image: {
            type: String
        },
        comments: [
          {
            commentText: {
              type: String,
              required: true,
              minlength: 1,
              maxlength: 280,
            },
            commentAuthor: {
              type: String,
              required: true,
            },
            createdAt: {
              type: Date,
              default: Date.now,
              get: (timestamp) => dateFormat(timestamp),
            },
          },
        ],
     
    },
    {
      toJSON: {
        getters: true,
      },
    },
  );
  
  
 
  
  
  const Project = model('Project', ProjectSchema);
  
  module.exports = Project;