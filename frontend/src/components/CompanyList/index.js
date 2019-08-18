import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { Header, Item, Button, Icon } from "semantic-ui-react";
import { companiesQuery } from "./definitions.graphql.js";

class CompanyList extends Component {
  renderCompanies() {
    return (
      <Item.Group>
        {this.props.data.companies.map(company => {
          return (
            <Item key={company.id}>
              <Item.Content>
                <Item.Header>{company.name}</Item.Header>
                <Item.Description>{company.description}</Item.Description>
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

export default graphql(companiesQuery)(CompanyList);
