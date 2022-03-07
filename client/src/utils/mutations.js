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
export const DELETE_USER = gql`
mutation DeleteUser($userId: ID!) {
  deleteUser(userId: $userId) {
    name
    _id
    github
  }
}`;