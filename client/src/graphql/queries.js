import { gql } from "@apollo/client";

export const GET_EMPLOYEES = gql`
  query {
    employees {
      id
      firstName
      lastName
      age
      dateOfJoining
      title
      department
      employeeType
      currentStatus
    }
  }
`;