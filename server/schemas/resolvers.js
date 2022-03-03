const { AuthenticationError } = require('apollo-server-express');
const { User, Project } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    singleUser: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    projects: async () => {
      return Project.find();
    }
  },

  Mutation: {
    addUser: async (parent, { name, github, password }) => {
      const users = await User.create({ name, github, password });
      const token = signToken(users);

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

//     addSkill: async (parent, { profileId, skill }) => {
//       return Profile.findOneAndUpdate(
//         { _id: profileId },
//         {
//           $addToSet: { skills: skill },
//         },
//         {
//           new: true,
//           runValidators: true,
//         }
//       );
//     },
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
    addProject: async (parent, args) => {
      const project = await Project.create(args);
      return project;
    },

  },
};
  
module.exports = resolvers;
