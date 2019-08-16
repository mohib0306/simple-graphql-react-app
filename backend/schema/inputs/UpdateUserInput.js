const graphql = require("graphql");
const {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLID,
  GraphQLString
} = graphql;

const UpdateUserInput = new GraphQLInputObjectType({
  name: "UpdateUserInput",
  description: "A collection of user fields that can be updated",
  fields: {
    firstName: {
      type: GraphQLString,
      description: "The first name of the user."
    },
    age: {
      type: GraphQLInt,
      description: "The age of the user"
    },
    company: {
      type: GraphQLID,
      description: "The company where the user works"
    }
  }
});

module.exports = UpdateUserInput;
