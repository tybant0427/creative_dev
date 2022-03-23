const { gql } = require('apollo-server-express');

const typeDefs = gql`
 

  type User {
    _id: ID
    userName: String
    github: String
    password: String
    projects: [Project]!
    comments: [Comment]
  }
  type Project {
    _id: ID
    userOfProject: String
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
    comments: [Comment]
    userComments(userId: ID!): User
  }

  type Mutation {
    addUser(userName: String!, github: String!, password: String!): Auth
    login(userName: String!, password: String!): Auth
    logout(userId: ID!): User
    addComment(
      userId: ID!
      projectId: ID!
      commentText: String!
      commentAuthor: String!
    ): Comment
    removeComment(commentId: ID!): Comment
    addProject( userId: ID!, userOfProject: String!, title: String!,description: String!, respitoryLink: String!,liveLink: String!, image: String!  ): Project
    deleteProject( projectId: ID!): Project
    deleteUser(userId: ID!):User
    updateProject( projectId: ID, title: String, description: String, respitoryLink: String, liveLink: String, image: String): Project
    updateUser(userId: ID, userName: String, github: String, password: String): User
  } 
`;

module.exports = typeDefs;
