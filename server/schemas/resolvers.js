const { AuthenticationError } = require('apollo-server-express');
const { User, Project } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    singleUser: async (parent, { github }) => {
      return User.findOne({ github }).populate("projects");
    },
    projects: async () => {
      return Project.find();
    }
  },

  Mutation: {
    addUser: async (parent, { name, github, password }) => {
      console.log("addUser");
      const users = await User.create({ name, github, password });
      const token = signToken(users);
      console.log(token);
      console.log(users);

      return { token, users };
    },
    login: async (parent, { github, password }) => {
      const user = await User.findOne({ github });

      if (!user) {
        throw new AuthenticationError('No user with this github found!');
      }

      const correctPw = await user.isCorrectPassword(password);
      

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },



    // logout: async (parent, { userId }) => {

    //   return User.findOneAndDelete({ _id: userId });
    // },
    addProject: async (parent, { author, title, description, respitoryLink, liveLink, image }) => {
      const project = await Project.create({ author, title, description, respitoryLink, liveLink, image });

      await User.findOneAndUpdate(
        { name: author },
        { $addToSet: { projects: project._id } }
      );

      return project;
    },

  },
};
  
module.exports = resolvers;
