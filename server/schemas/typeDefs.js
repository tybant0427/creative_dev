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
    comments: [Comment]
  }
  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }
 
  type Auth { 
    token: ID!
    users: User
  }

  type Query {
    
    users: [User]
    singleUser(userId: ID!): User
    projects: [Project]
    project(projectId: ID!): Project
    me: User
  }

  type Mutation {
    addUser(name: String!, github: String!, password: String!): Auth
    login(github: String!, password: String!): Auth
    logout(userId: ID!): User
    addComment(
      projectId: ID!
      commentText: String!
      commentAuthor: String!
    ): Project
    removeComment(projectId: ID!, commentId: ID!): Project
    addProject(author: String!, userId: ID!,title: String!,description: String!, respitoryLink: String!,liveLink: String!,
      image: String!  ): Project
      deleteProject( projectId: ID!): Project
    deleteUser(userId: ID!):User
    updateProject( projectId: ID, title: String, description: String, respitoryLink: String, liveLink: String, image: String): Project
  } 
`;

module.exports = typeDefs;
