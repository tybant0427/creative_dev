import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($userName: String!, $github: String!, $password: String!){
  addUser(userName: $userName, github:$github, password:$password){
    token
    users {
      github
      userName
      password
      _id
    }
  }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      users{
        _id
        userName

      }
    }
  }
  `;
  
export const ADD_PROJECT = gql`
mutation Mutation($image: String!, $liveLink: String!, $respitoryLink: String!, $description: String!, $title: String!, $userOfProject: String!, $userId: ID!) {
  addProject(image: $image, liveLink: $liveLink, respitoryLink: $respitoryLink, description: $description, title: $title, userOfProject: $userOfProject, userId: $userId) {
    userOfProject
    title
    description
    respitoryLink
    liveLink
    image
   
  }
}
`;
export const DELETE_PROJECT = gql`
mutation DeleteProject($projectId: ID!) {
  deleteProject(projectId: $projectId) {
    title
    description
  }
}
`;

export const ADD_COMMENT = gql`
mutation Mutation($userId: ID!,$projectId: ID!, $commentText: String!, $commentAuthor: String!) {
  addComment(userId: $userId, projectId: $projectId, commentText: $commentText, commentAuthor: $commentAuthor) {
    commentText
    _id
    commentAuthor
    createdAt
    
  }
}
`;
export const DELETE_USER = gql`
mutation DeleteUser($userId: ID!) {
  deleteUser(userId: $userId) {
    userName
    _id
  }
}`;

export const UPDATE_PROJECT = gql`
mutation UpdateProject($projectId: ID, $title: String, $description: String, $respitoryLink: String, $image: String, $liveLink: String) {
  updateProject(projectId: $projectId, title: $title, description: $description, respitoryLink: $respitoryLink, image: $image, liveLink: $liveLink) {
    title
    description
    _id
    respitoryLink
    image
    liveLink
  }
}`;

export const DELETE_COMMENT = gql `
mutation Mutation($commentId: ID!) {
  removeComment(commentId: $commentId) {
    _id
    commentText
  }
}`;