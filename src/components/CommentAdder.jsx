import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CommentAdder.css";

class CommentAdder extends Component {
  state = {
    body: ""
  };

  render() {
    const { className, commentCount } = this.props;
    const { body } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={className}>
        <div className="comment-adder-body-container">
          <textarea
            onChange={this.handleChange}
            className="comment-adder-body-field"
            value={body}
            placeholder={
              commentCount
                ? "Add a comment..."
                : "Be the first to add a comment!"
            }
          />
        </div>
        <button className="comment-adder-submit-button">Comment!</button>
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
  commentCount: PropTypes.number.isRequired,
  user: PropTypes.object,
  className: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired
};
export default CommentAdder;
