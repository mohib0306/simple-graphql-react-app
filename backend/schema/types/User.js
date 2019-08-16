const graphql = require("graphql");
const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInt
} = graphql;

const User = new GraphQLObjectType({
  name: "User",
  description: "This contains all the info about the user",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "A unique identifier for this user"
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The first name of this user"
    },
    age: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "The age of this user"
    },
    company: {
      type: Company,
      description: "The company in which this user works",
      resolve(parent) {
        return axios
          .get(`http://localhost:3000/companies/${parent.companyId}`)
          .then(result => result.data);
      }
    }
  })
});

module.exports = User;

// To solve the problem that comes along with cyclic dependency User <--> Company
// we import the Company type at the end
const Company = require("./Company");
