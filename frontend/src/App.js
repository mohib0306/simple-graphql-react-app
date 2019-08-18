import React from "react";
import { Route, Switch } from "react-router";
import { Container } from "semantic-ui-react";
import CompanyList from "./components/CompanyList";
import CreateCompany from "./components/Company/CreateCompany";

export default () => {
  return (
    <Container textAlign="left">
      <Switch>
        <Route path="/company/create" component={CreateCompany} />
        <Route path="/" component={CompanyList} />
      </Switch>
    </Container>
  );
};
