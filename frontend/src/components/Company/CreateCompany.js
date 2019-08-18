import React, { Component } from "react";
import { Header, Form, Button } from "semantic-ui-react";

export default class CreateCompany extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", description: "" };
  }

  render() {
    return (
      <div>
        <Header as="h1">Add a new company</Header>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input
              placeholder="name"
              onChange={event => this.setState({ name: event.target.value })}
              value={this.state.name}
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input
              placeholder="description"
              onChange={event =>
                this.setState({ description: event.target.value })
              }
              value={this.state.description}
            />
          </Form.Field>
          <Button type="submit">Add</Button>
        </Form>
      </div>
    );
  }
}
