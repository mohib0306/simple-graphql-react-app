import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Form, Button, Segment, Header, Label } from "semantic-ui-react";
import {
  addReviewMutation,
  companyQuery,
  rateReviewMutation
} from "./definitions.graphql";
import "./style.css";

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
  }
  onLike(id) {
    this.props
      .mutate({
        mutation: rateReviewMutation,
        variables: {
          review: id,
          like: true
        },
        refetchQueries: () => [
          { query: companyQuery, variables: { id: this.props.company } }
        ]
      })
      .then(() => this.setState({ content: "" }));
  }
  renderReviews(reviews) {
    return (
      <div className="reviews">
        <Header as="h3">Reviews</Header>
        {reviews.map(review => {
          return (
            <Segment key={review.id} padded="very">
              {review.content}
              <div className="ratingsWrapper">
                <Button
                  className="ratingButton"
                  floated="right"
                  circular
                  type="submit"
                  icon="thumbs up"
                  color="blue"
                  onClick={() => this.onLike(review.id)}
                />
                {review.likes > 0 && (
                  <Label className="ratingLabel" color="red" floating>
                    {review.likes}
                  </Label>
                )}
              </div>
            </Segment>
          );
        })}
      </div>
    );
  }
  onSubmit(event) {
    event.preventDefault();
    this.state.content &&
      this.props
        .mutate({
          mutation: addReviewMutation,
          variables: {
            company: this.props.company,
            content: this.state.content
          },
          refetchQueries: () => [
            { query: companyQuery, variables: { id: this.props.company } }
          ]
        })
        .then(() => this.setState({ content: "" }));
  }
  render() {
    return (
      <div>
        {this.props.reviews.length > 0 &&
          this.renderReviews(this.props.reviews)}
        <Form onSubmit={this.onSubmit.bind(this)} className="reviewForm">
          <Form.TextArea
            placeholder="Tell us your experience"
            value={this.state.content}
            onChange={event => this.setState({ content: event.target.value })}
          />
          <Button
            type="submit"
            content="Add Review"
            labelPosition="left"
            icon="edit"
            primary
          />
        </Form>
      </div>
    );
  }
}

export default graphql(rateReviewMutation)(graphql(addReviewMutation)(Review));
