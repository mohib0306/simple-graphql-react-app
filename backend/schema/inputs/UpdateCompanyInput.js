const graphql = require("graphql");
const { GraphQLInputObjectType, GraphQLString } = graphql;

const UpdateCompanyInput = new GraphQLInputObjectType({
  name: "UpdateCompanyInput",
  description: "A collection of company fields that can be updated",
  fields: {
    name: {
      type: GraphQLString,
      description: "The name of the company."
    },
    description: {
      type: GraphQLString,
      description: "The description of the company."
    }
  }
});

module.exports = UpdateCompanyInput;
