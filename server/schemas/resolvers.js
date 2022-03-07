const { AuthenticationError } = require('apollo-server-express');
const { User, Project } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    singleUser: async (parent, { userId }) => {
      return User.findOne({ _id:userId }).populate('projects');
    },
    projects: async () => {
      return Project.find();
    },
 
  },
  

  Mutation: {
    addUser: async (parent, { name, github, password }) => {
      console.log("addUser");
      const users = await User.create({ name, github, password });
      const token = signToken(users);
      // console.log(token);
      // console.log(users);

      return { token, users };
    },
    login: async (parent, {  github, password }) => {
      const users = await User.findOne({ github });
console.log(users);
      if (!users) {
        throw new AuthenticationError('No user with this github found!');
      }

      const correctPw = await users.isCorrectPassword(password);
      

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(users);
      return { token, users };
    },
    addComment: async (parent, { projectId, commentText, commentAuthor }) => {
      return Project.findOneAndUpdate(
        { _id: projectId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
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


    // logout: async (parent, { userId }) => {

    //   return User.findOneAndDelete({ _id: userId });
    // },
    addProject: async (parent, { userId, title, description, respitoryLink, liveLink, image }) => {
      const project = await Project.create({  title, description, respitoryLink, liveLink, image });

      await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { projects: project._id } }
      );

      return project;
    },
    deleteProject: async (parent, {  projectId}) => {
      const project = await Project.findOneAndDelete({_id:projectId});
//added _id, if doesnt work remove
      // await User.findOneAndUpdate(
      //   { _id: userId },
      //   { $pull: { project } }
      

      return project;
    },
    // deleteProject: async (parent, { userId, projectId }) => {
    //   return Project.findOneAndDelete(
    //     { _id: projectId },
    //     { $pull: {projects: { _id: projectId}}  },
    //     { new: true }
    //   );
    // },

  },
};
  
module.exports = resolvers;
