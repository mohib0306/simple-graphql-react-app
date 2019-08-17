import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import "./style.css";

class CompanyList extends Component {
  renderCompanies() {
    return this.props.data.companies.map(company => {
      return <li key={company.id}>{company.name} </li>;
    });
  }
  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="list">
        <div className="listHeader">Company List </div>
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
    }
  }
`;
export default graphql(query)(CompanyList);
