import { gql } from '@apollo/client';

export const QUERY_TECH = gql`
query Users {
  users {
  userName
  github
  password  
  _id
  }
}
`;
export const QUERY_PROJECTS =gql`
query Projects {
  projects {
    _id
    title
    description
    respitoryLink
    liveLink
    image
    comments {
      createdAt
      commentAuthor
      commentText
    }
  }
}
`;

export const QUERY_SINGLE_PROJECTS =gql`
query getSingleProjects {
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
    userName
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
export const QUERY_ME = gql`
query Me {
  me {
    userName
    _id
    github
    projects {
      title
      description
      respitoryLink
      liveLink
      image
      _id
    }
  }
}`;