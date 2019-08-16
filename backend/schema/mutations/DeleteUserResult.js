const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLList
} = graphql;
const ErrorType = require("../types/Error");

const DeleteUserResult = new GraphQLObjectType({
  name: "DeleteUserResult",
  description: "The result of the deleteUser mutation",
  fields: {
    success: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: "Indicates if the mutation was successful."
    },
    errors: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ErrorType))),
      description:
        "A list of user related errors that occurred executing this mutation",
      resolve(parent) {
        if (parent.success) {
          return [];
        }
        return parent.errors.map(error => ({
          message: error.message
        }));
      }
    }
  }
});

module.exports = DeleteUserResult;
