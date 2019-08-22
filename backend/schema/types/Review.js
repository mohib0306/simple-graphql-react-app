const graphql = require("graphql");
const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } = graphql;

const Review = new GraphQLObjectType({
  name: "Review",
  description: "This contains all the info about the review",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "A unique identifier for this review"
    },
    content: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The content of this review"
    }
  })
});

module.exports = Review;
