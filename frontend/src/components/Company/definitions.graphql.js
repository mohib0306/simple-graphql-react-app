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
      reviews {
        id
        content
      }
    }
  }
`;

export const addReviewMutation = gql`
  mutation addReviewMutation($company: ID!, $content: String!) {
    addReview(company: $company, content: $content) {
      id
      content
    }
  }
`;
