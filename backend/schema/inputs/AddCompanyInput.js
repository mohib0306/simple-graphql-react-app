const graphql = require("graphql");
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = graphql;

const AddCompanyInput = new GraphQLInputObjectType({
  name: "AddCompanyInput",
  description: "A collection of a new company creation fields",
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The name of the new company"
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The description of the new company"
    }
  }
});

module.exports = AddCompanyInput;
