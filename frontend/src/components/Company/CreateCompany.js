import React, { Component } from "react";
import { Header, Form, Button, Icon } from "semantic-ui-react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { companiesQuery } from "../CompanyList/definitions.graphql";
import { addCompanyMutation } from "./definitions.graphql";

class CreateCompany extends Component {
  constructor(props) {
    super(props);
    this.state = { company: { name: "", description: "" } };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props
      .mutate({
        variables: {
          company: {
            name: this.state.company.name,
            description: this.state.company.description
          }
        },
        refetchQueries: () => [{ query: companiesQuery }]
      })
      .then(() => this.props.history.push("/"));
  }
  render() {
    return (
      <div>
        <Link to="/">
          <Button color="green" icon size="big">
            <Icon name="angle left" />
            Back to full list
          </Button>
        </Link>
        <Header as="h1">Add a new company</Header>
        <Form onSubmit={this.onSubmit.bind(this)}>
          <Form.Field>
            <label>Name</label>
            <input
              placeholder="name"
              onChange={event => {
                event.persist();
                return this.setState(prevState => {
                  return {
                    company: {
                      ...prevState.company,
                      name: event.target.value
                    }
                  };
                });
              }}
              value={this.state.company.name || ""}
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input
              placeholder="description"
              onChange={event => {
                event.persist();
                return this.setState(prevState => {
                  return {
                    company: {
                      ...prevState.company,
                      description: event.target.value
                    }
                  };
                });
              }}
              value={this.state.company.description || ""}
            />
          </Form.Field>
          <Button
            floated="right"
            circular
            icon="plus"
            size="big"
            type="submit"
            color="violet"
          />
        </Form>
      </div>
    );
  }
}

export default graphql(addCompanyMutation)(CreateCompany);
