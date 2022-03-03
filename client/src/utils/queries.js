import { gql } from '@apollo/client';

export const QUERY_TECH = gql`
query Users {
  users {
  name
  github
  password  
  _id
  }
}
`;


