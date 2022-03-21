const { AuthenticationError } = require('apollo-server-express');
const { User, Project } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('projects');
    },

    singleUser: async (parent, { userId }) => {
      return User.findOne({ _id:userId }).populate('projects');
    },
    projects: async () => {
    
      return Project.find();
    },
 
  },
  

  Mutation: {
    addUser: async (parent, { userName, github, password }) => {
      console.log("addUser");
      const users = await User.create({ userName, github, password });
      const token = signToken(users);
      // console.log(token);
      // console.log(users);

      return { token, users };
    },
    login: async (parent, {  userName, password }) => {
      const users = await User.findOne({ userName });
console.log(users);
      if (!users) {
        throw new AuthenticationError('No user with this user name found!');
      }

      const correctPw = await users.isCorrectPassword(password);
      

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }
console.log("Logged In");
      const token = signToken(users);
      return { token, users };
    },
    addComment: async (parent, { projectId, commentText, commentAuthor, createdAt}) => {
      console.log("comment added");
      return Project.findOneAndUpdate(
        { _id: projectId },
        {
          $addToSet: { comments: { commentText, commentAuthor, createdAt } },
        },
        {
          new: true,
          runValidators: true,
        }
        );
        
    },
    removeComment: async (parent, { projectId, commentId }) => {
      return Project.findOneAndUpdate(
        { _id: projectId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
    // removeComment: async (parent, {  commentId}) => {
    //   const projectComment = await Project.deleteOne({ comments: { _id: commentId } });
    //   console.log(projectComment);
    //   return projectComment;
    // },


    // logout: async (parent, { userId }) => {

    //   return User.findOneAndDelete({ _id: userId });
    // },
    addProject: async (parent, { userId, userOfProject, title, description, respitoryLink, liveLink, image }) => {
      const project = await Project.create({ userOfProject, title, description, respitoryLink, liveLink, image });

      await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { projects: project._id } }
      );

      return project;
    },
    deleteProject: async (parent, {  projectId}) => {
      const project = await Project.findOneAndDelete({_id:projectId});
      return project;
    },
    deleteUser: async (parent, {  userId}) => {
      try{
      const currentUser = await User.findOne({_id:userId})
      console.log(currentUser);
       await Project.deleteMany({_id:currentUser.projects})
      const deletedUser =  await User.findOneAndDelete({_id: userId})
      // const deletedUser = User.deleteOne({_id: userId})
      console.log(deletedUser);
      return deletedUser
      }catch(err){
        console.log(err); 
        return; 
      }

    },

    updateProject: async (parent, args)=>{
      try{
      const updated = await Project.findOneAndUpdate({_id: args.projectId},{$set: args})
      return updated;
      }catch(err){
        console.log(err);
        return;
      }
    },
    updateUser: async (parent, args)=>{
      try{
      const updatedUser = await User.findOneAndUpdate({_id: args.userId},{$set: args})
      return updatedUser;
      }catch(err){
        console.log(err);
        return;
      }
    }

  },
};
  
module.exports = resolvers;
