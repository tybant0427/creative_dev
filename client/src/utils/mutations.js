import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($name: String!, $github: String!, $password: String!){
  addUser(name: $name, github:$github, password:$password){
    user {
      name
      github
      password
      _id
    }
  }
  }
`;


