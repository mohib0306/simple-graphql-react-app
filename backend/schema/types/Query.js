const graphql = require("graphql");
const axios = require("axios");
const { GraphQLObjectType, GraphQLID } = graphql;
const User = require("./User");
const Company = require("./Company");

const Query = new GraphQLObjectType({
  name: "Query",
  description: "Root query of the graphql server",
  fields: {
    user: {
      type: User,
      description: "Returns a user object that has the specified ID",
      args: {
        id: {
          type: GraphQLID,
          description: "ID of the user that has to be queried."
        }
      },
      resolve(parent, args) {
        return axios
          .get(`http://localhost:3000/users/${args.id}`)
          .then(result => result.data)
          .catch(error => {
            if (error.response.status === 404) {
              return null;
            } else {
              // Something happened that triggered an Error
              throw new Error(`Error: ${error.message}`);
            }
          });
      }
    },
    company: {
      type: Company,
      description: "Returns a company object that has the specified ID",
      args: {
        id: {
          type: GraphQLID,
          description: "ID of the company that has to be queried."
        }
      },
      resolve(parent, args) {
        return axios
          .get(`http://localhost:3000/companies/${args.id}`)
          .then(result => result.data)
          .catch(error => {
            if (error.response.status === 404) {
              return null;
            } else {
              // Something happened that triggered an Error
              throw new Error(`Error: ${error.message}`);
            }
          });
      }
    }
  }
});

module.exports = Query;
