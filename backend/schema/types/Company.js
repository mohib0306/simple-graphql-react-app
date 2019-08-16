const graphql = require("graphql");
const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = graphql;
const User = require("./User");

const Company = new GraphQLObjectType({
  name: "Company",
  description: "This contains all the info about the company",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "A unique identifier for this company"
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The name of this company"
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: "A brief information about this company"
    },
    users: {
      type: new GraphQLNonNull(new GraphQLList(User)),
      description: "List of the users who work at this company",
      resolve(parent) {
        return axios
          .get(`http://localhost:3000/companies/${parent.id}/users`)
          .then(result => result.data)
          .catch(error => {
            if (error.response.status === 404) {
              return [];
            } else {
              // Something happened that triggered an Error
              throw new Error(`Error: ${error.message}`);
            }
          });
      }
    }
  })
});

module.exports = Company;
