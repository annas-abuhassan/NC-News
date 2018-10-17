import React, { Component } from "react";
import "./CommentAdder.css";

class CommentAdder extends Component {
  state = {
    body: ""
  };

  render() {
    const {
      className,
      user: { username }
    } = this.props;

    const { handleSubmit, handleChange } = this;
    const { body } = this.state;

    return (
      <form onSubmit={handleSubmit} className={className}>
        <label className="comment-adder-label">Comment as: {username}</label>
        <div className="comment-adder-body-container">
          <input
            onChange={handleChange}
            className="comment-adder-body-field"
            value={body}
            placeholder="Add a comment..."
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
