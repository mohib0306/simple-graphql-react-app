import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Header, Item } from "semantic-ui-react";

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
      </div>
    );
  }
}

const query = gql`
  {
    companies {
      id
      name
      description
    }
  }
`;
export default graphql(query)(CompanyList);
