import { gql } from "@apollo/client";

export const GET_TASKS = gql`
  query GetTasks {
    tasks(input: {}) {
      id
      assignee {
        avatar
        fullName
      }
      pointEstimate
      createdAt
      dueDate
      name
      position
      status
      tags
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      fullName
    }
  }
`;
