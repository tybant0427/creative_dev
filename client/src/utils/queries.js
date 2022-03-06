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
export const QUERY_PROJECTS =gql`
query Projects {
  projects {
    title
    description
    respitoryLink
    liveLink
    image
  }
}
`;

export const QUERY_SINGLEUSER = gql`
query SingleUser($userId: ID!) {
  singleUser(userId: $userId) {
    name
    github
    password
    projects {
      title
      _id
      description
      respitoryLink
      liveLink
      image
    }
  }
}
`;