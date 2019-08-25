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
        likes: ratings(like: true)
        dislikes: ratings(like: false)
        allRatings: ratings
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
export const rateReviewMutation = gql`
  mutation rateReviewMutation($review: ID!, $like: Boolean!) {
    rateReview(review: $review, like: $like) {
      id
      content
      likes: ratings(like: true)
      dislikes: ratings(like: false)
      allRatings: ratings
    }
  }
`;
