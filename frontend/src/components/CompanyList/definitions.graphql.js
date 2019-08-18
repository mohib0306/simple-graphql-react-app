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
