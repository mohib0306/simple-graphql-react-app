const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLList
} = graphql;
const ErrorType = require("../types/Error");

const DeleteCompanyResult = new GraphQLObjectType({
  name: "DeleteCompanyResult",
  description: "The result of the deleteCompany mutation",
  fields: {
    success: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: "Indicates if the mutation was successful."
    },
    errors: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ErrorType))),
      description:
        "A list of company deletion related errors that occurred executing this mutation",
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

module.exports = DeleteCompanyResult;
