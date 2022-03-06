const { Schema, model } = require('mongoose');

const ProjectSchema = new Schema(
    {
      // author: {
      //   type: String,
      //   required: true
      // },
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
        }
     
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );
  
  
 
  
  
  const Project = model('Project', ProjectSchema);
  
  module.exports = Project;