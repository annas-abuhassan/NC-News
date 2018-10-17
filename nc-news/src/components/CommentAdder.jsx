import React, { Component } from "react";
import "./CommentAdder.css";

class CommentAdder extends Component {
  state = {
    body: ""
  };

  render() {
    const { className } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className={className}>
        <label className="comment-adder-label">Comment as: USER</label>
        <div className="comment-adder-body-container">
          <input
            onChange={this.handleChange}
            className="comment-adder-body-field"
            value={this.state.body}
          />
          <button className="comment-adder-submit-button">Comment!</button>
        </div>
      </form>
    );
  }

  handleSubmit = event => {
    const { addComment } = this.props;
    const { body } = this.state;
    event.preventDefault();
    addComment(body);
    this.setState({ body: "" });
  };

  handleChange = event => {
    this.setState({
      body: event.target.value
    });
  };
}

export default CommentAdder;
