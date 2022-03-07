const { gql } = require('apollo-server-express');

const typeDefs = gql`
 

  type User {
    _id: ID
    name: String
    github: String
    password: String
    projects: [Project]!
  }
  type Project {
    _id: ID
    title: String
    description: String
    respitoryLink: String
    liveLink: String
    image: String
  }

 
  type Auth { 
    token: ID!
    users: User
  }

  type Query {
    
    users: [User]
    singleUser(userId: ID!): User
    projects: [Project]
    me: User
  }

  type Mutation {
    addUser(name: String!, github: String!, password: String!): Auth
    login(github: String!, password: String!): Auth
    logout(userId: ID!): User
    addProject(userId: ID!,title: String!,description: String!, respitoryLink: String!,liveLink: String!,
      image: String!  ): Project
      deleteProject( projectId: ID!): Project
    deleteUser(userId: ID!):User
  } 
`;

module.exports = typeDefs;
