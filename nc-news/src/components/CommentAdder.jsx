import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CommentAdder.css";

class CommentAdder extends Component {
  state = {
    body: ""
  };

  render() {
    const { className } = this.props;

    const { handleSubmit, handleChange } = this;
    const { body } = this.state;

    return (
      <form onSubmit={handleSubmit} className={className}>
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

CommentAdder.propTypes = {
  user: PropTypes.object,
  className: PropTypes.string.isRequired
};
export default CommentAdder;
