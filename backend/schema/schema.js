const graphql = require("graphql");
const { GraphQLSchema } = graphql;
const Query = require("./types/Query");
const Mutation = require("./types/Mutation");

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
