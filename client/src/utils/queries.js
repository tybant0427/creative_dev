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