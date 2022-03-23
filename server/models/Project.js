const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const ProjectSchema = new Schema(
    {
      userOfProject:{
        type: String,
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
            type: Schema.Types.ObjectId,
            ref: 'Comments',
          },
        ]
    
     
    },
    {
      toJSON: {
        getters: true,
      },
    },
  );
  
  
 
  
  
  const Project = model('Project', ProjectSchema);
  
  module.exports = Project;