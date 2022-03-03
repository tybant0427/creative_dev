const { gql } = require('apollo-server-express');

const typeDefs = gql`
 

  type User {
    _id: ID
    name: String
    github: String
    password: String
  }


  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    
    users: [User]!
    singleUser(userId: ID!): User
  }

  type Mutation {
    
    addUser(name: String!, github: String!, password: String!): Auth
    login(github: String!, password: String!): Auth

    
  }
`;

module.exports = typeDefs;
