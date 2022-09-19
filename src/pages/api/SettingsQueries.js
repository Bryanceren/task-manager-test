import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query GetProfile {
    profile {
      avatar
      createdAt
      email
      fullName
      id
      type
      updatedAt
    }
  }
`;
