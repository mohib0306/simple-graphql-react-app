import gql from "graphql-tag";

export const addCompanyMutation = gql`
  mutation addCompanyMutation($company: AddCompanyInput!) {
    addCompany(company: $company) {
      id
      name
      description
    }
  }
`;

export const companyQuery = gql`
  query companyQuery($id: ID!) {
    company(id: $id) {
      id
      name
      description
    }
  }
`;
