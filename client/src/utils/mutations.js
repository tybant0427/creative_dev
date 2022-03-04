import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($name: String!, $github: String!, $password: String!){
  addUser(name: $name, github:$github, password:$password){
    token
    users {
      name
      github
      password
      
    }
  }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($github: String!, $password: String!) {
    login(github: $github, password: $password) {
      token
    
    }
  }

`;
