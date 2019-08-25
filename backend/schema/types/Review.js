const graphql = require("graphql");
const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean
} = graphql;

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
    },
    ratings: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "Number of likes that this review has",
      args: {
        like: {
          type: GraphQLBoolean,
          description: "Filter out likes or dislikes for a review if needed"
        }
      },
      async resolve(parent, args) {
        const ratings = await axios
          .get(`http://localhost:3000/reviews/${parent.id}/review_ratings`)
          .then(result => result.data);

        if (typeof args.like !== "undefined" && args.like !== null) {
          return ratings.filter(rating => rating.like === args.like).length;
        }
        return ratings.length;
      }
    }
  })
});

module.exports = Review;
