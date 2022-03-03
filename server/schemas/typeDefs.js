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
    singleUser(github: String!): User
    projects: [Project]
  }

  type Mutation {
    
    addUser(name: String!, github: String!, password: String!): Auth
    login(github: String!, password: String!): Auth
    logout(userId: ID!): User
    addProject(author: String!,title: String!,description: String!, respitoryLink: String!,liveLink: String!,
      image: String!  ): Project
  } 
`;

module.exports = typeDefs;
