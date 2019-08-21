import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { Header, Item, Button, Icon } from "semantic-ui-react";
import {
  companiesQuery,
  deleteCompanyMutation
} from "./definitions.graphql.js";

class CompanyList extends Component {
  onDeleteCompany(id) {
    this.props
      .mutate({
        variables: { id }
      })
      .then(() => this.props.data.refetch());
  }
  renderCompanies() {
    return (
      <Item.Group divided>
        {this.props.data.companies.map(company => {
          return (
            <Item key={company.id}>
              <Item.Content>
                <Link to={`/companies/${company.id}`}>
                  <Item.Header>{company.name}</Item.Header>
                </Link>
                <Item.Description>
                  {company.description}
                  <Button
                    floated="right"
                    circular
                    icon="trash"
                    size="big"
                    type="submit"
                    color="red"
                    onClick={() => this.onDeleteCompany(company.id)}
                  />
                </Item.Description>
              </Item.Content>
            </Item>
          );
        })}
      </Item.Group>
    );
  }
  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Header as="h1">List of companies</Header>
        {this.renderCompanies()}
        <Link to="/companies/create">
          <Button primary icon size="big" labelPosition="left" floated="right">
            Add new company
            <Icon name="plus" />
          </Button>
        </Link>
      </div>
    );
  }
}

export default graphql(deleteCompanyMutation)(
  graphql(companiesQuery)(CompanyList)
);
