import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { Header, Button, Loader, Icon, Message } from "semantic-ui-react";
import { companyQuery } from "./definitions.graphql";
import Review from "./Review";

class CompanyDetail extends Component {
  render() {
    if (this.props.data.loading) {
      return <Loader active inline="centered" />;
    }
    const { company } = this.props.data;
    if (!company) {
      return (
        <div>
          <Link to="/">
            <Button color="green" icon size="big">
              <Icon name="angle left" />
              Back to full list
            </Button>
          </Link>
          <Message color="red" size="huge">
            The company your are looking is not found
          </Message>
        </div>
      );
    }
    return (
      <div>
        <Link to="/">
          <Button color="green" icon size="big">
            <Icon name="angle left" />
            Back to full list
          </Button>
        </Link>
        <Header as="h1">Company Details</Header>{" "}
        <Header as="h3">{company.name}</Header>
        <p>{company.description}</p>
        <Review company={company.id} reviews={company.reviews} />
      </div>
    );
  }
}

export default graphql(companyQuery, {
  options: props => ({ variables: { id: props.match.params.id } })
})(CompanyDetail);
