const { gql } = require('apollo-server-express');

const typeDefs = gql`
 

  type User {
    _id: ID
    name: String
    github: String
    password: String
  }


 
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
    removeUser(userId: ID!): User
    
  }
`;

module.exports = typeDefs;
