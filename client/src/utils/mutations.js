import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($name: String!, $github: String!, $password: String!){
  addUser(name: $name, github:$github, password:$password){
    token
    users {
      name
      github
      password
      _id
    }
  }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($github: String!, $password: String!) {
    login(github: $github, password: $password) {
      token
      users{
        _id
        name

      }
    }
  }
  `;
  
export const ADD_PROJECT = gql`
mutation AddProject($userId: ID!, $title: String!, $description: String!, $respitoryLink: String!, $liveLink: String!, $image: String!) {
  addProject(userId: $userId, title: $title, description: $description, respitoryLink: $respitoryLink, liveLink: $liveLink, image: $image) {

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
mutation addComment($projectId: ID!, $commentText: String!, $commentAuthor: String!) {
  addComment(projectId: $projectId, commentText: $commentText, commentAuthor: $commentAuthor) {
    _id
    comments {
      _id
      commentText
      commentAuthor
      createdAt    
    }
  }
}
`;
export const DELETE_USER = gql`
mutation DeleteUser($userId: ID!) {
  deleteUser(userId: $userId) {
    name
    _id
    github
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
