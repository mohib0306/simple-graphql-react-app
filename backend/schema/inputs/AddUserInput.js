const graphql = require("graphql");
const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLID,
  GraphQLString
} = graphql;

const AddUserInput = new GraphQLInputObjectType({
  name: "AddUserInput",
  description: "A collection of a new user creation fields",
  fields: {
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The first name of the new user"
    },
    age: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "The age of the new user"
    },
    company: {
      type: GraphQLID,
      description: "The company where the user works"
    }
  }
});

module.exports = AddUserInput;
