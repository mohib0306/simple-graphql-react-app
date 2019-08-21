const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLNonNull } = graphql;
const axios = require("axios");
const AddUserInput = require("../inputs/AddUserInput");
const AddCompanyInput = require("../inputs/AddCompanyInput");
const UpdateUserInput = require("../inputs/UpdateUserInput");
const UpdateCompanyInput = require("../inputs/UpdateCompanyInput");
const DeleteUserResult = require("../mutations/DeleteUserResult");
const DeleteCompanyResult = require("../mutations/DeleteCompanyResult");
const User = require("./User");
const Company = require("./Company");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Root mutation type",
  fields: {
    addUser: {
      type: new GraphQLNonNull(User),
      description: "Add a new user to our data set",
      args: {
        user: {
          type: AddUserInput,
          description: "Input object containing values for creating a new user"
        }
      },
      resolve(parent, { user }) {
        return axios
          .post("http://localhost:3000/users", user)
          .then(response => response.data)
          .catch(error => new Error(`Error: ${error.messge}`));
      }
    },
    updateUser: {
      type: new GraphQLNonNull(User),
      description: "Update a current user in our data set",
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: "ID of the user that should be updated"
        },
        updates: {
          type: new GraphQLNonNull(UpdateUserInput),
          description: "An object that holds the new values for the user"
        }
      },
      async resolve(parent, { id, updates }) {
        await axios.get(`http://localhost:3000/users/${id}`).catch(error => {
          if (error.response.status === 404) {
            throw new Error(
              `User with id = ${id} not found. Please check the ID and enter correct information`
            );
          }
          throw new Error(`${error}`);
        });
        return axios
          .patch(`http://localhost:3000/users/${id}`, updates)
          .then(response => response.data)
          .catch(error => {
            throw new Error(`${error}`);
          });
      }
    },
    deleteUser: {
      type: new GraphQLNonNull(DeleteUserResult),
      description: "Delete a user from our data set",
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: "ID of the user that should be deleted"
        }
      },
      async resolve(parent, { id }) {
        await axios.get(`http://localhost:3000/users/${id}`).catch(error => {
          if (error.response.status === 404) {
            throw new Error(
              `User with id = ${id} not found. Please check the ID and enter correct information`
            );
          }
          throw new Error(`${error}`);
        });
        return axios
          .delete(`http://localhost:3000/users/${id}`)
          .then(response => {
            if (response.status === 200) {
              return {
                success: true,
                errors: []
              };
            }
          })
          .catch(error => {
            return {
              success: false,
              errors: [new Error(`${error}`)]
            };
          });
      }
    },
    addCompany: {
      type: new GraphQLNonNull(Company),
      description: "Add a new company to our data set",
      args: {
        company: {
          type: AddCompanyInput,
          description:
            "Input object containing values for creating a new company"
        }
      },
      resolve(parent, { company }) {
        return axios
          .post("http://localhost:3000/companies", company)
          .then(response => response.data)
          .catch(error => new Error(`Error: ${error.messge}`));
      }
    },
    updateCompany: {
      type: new GraphQLNonNull(Company),
      description: "Update a current company in our data set",
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: "ID of the company that should be updated"
        },
        updates: {
          type: new GraphQLNonNull(UpdateCompanyInput),
          description: "An object that holds the new values for the company"
        }
      },
      async resolve(parent, { id, updates }) {
        await axios
          .get(`http://localhost:3000/companies/${id}`)
          .catch(error => {
            if (error.response.status === 404) {
              throw new Error(
                `Company with id = ${id} not found. Please check the ID and enter correct information`
              );
            }
            throw new Error(`${error}`);
          });
        return axios
          .patch(`http://localhost:3000/companies/${id}`, updates)
          .then(response => response.data)
          .catch(error => {
            throw new Error(`${error}`);
          });
      }
    },
    deleteCompany: {
      type: new GraphQLNonNull(DeleteCompanyResult),
      description: "Delete a company from our data set",
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: "ID of the company that should be deleted"
        }
      },
      async resolve(parent, { id }) {
        await axios
          .get(`http://localhost:3000/companies/${id}`)
          .catch(error => {
            if (error.response.status === 404) {
              throw new Error(
                `company with id = ${id} not found. Please check the ID and enter correct information`
              );
            }
            throw new Error(`${error}`);
          });
        return axios
          .delete(`http://localhost:3000/companies/${id}`)
          .then(response => {
            if (response.status === 200) {
              return {
                success: true,
                errors: []
              };
            }
          })
          .catch(error => {
            return {
              success: false,
              errors: [new Error(`${error}`)]
            };
          });
      }
    }
  }
});

module.exports = Mutation;
