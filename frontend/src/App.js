import React from "react";
import { Route, Switch } from "react-router";
import { Container } from "semantic-ui-react";
import CompanyList from "./components/CompanyList";
import CreateCompany from "./components/Company/CreateCompany";
import CompanyDetail from "./components/Company/CompanyDetail";

export default () => {
  return (
    <Container textAlign="left">
      <Switch>
        <Route path="/companies/create" component={CreateCompany} />
        <Route path="/companies/:id" component={CompanyDetail} />
        <Route path="/" component={CompanyList} />
      </Switch>
    </Container>
  );
};
