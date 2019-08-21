import gql from "graphql-tag";

export const companiesQuery = gql`
  {
    companies {
      id
      name
      description
    }
  }
`;

export const deleteCompanyMutation = gql`
  mutation deleteMutation($id: ID!) {
    deleteCompany(id: $id) {
      success
      errors {
        message
      }
    }
  }
`;
