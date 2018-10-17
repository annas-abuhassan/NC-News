import React, { Component } from "react";
import * as api from "../api.js";

class CommentDeleter extends Component {
  render() {
    const { className } = this.props;
    return (
      <button className={className} onClick={this.handleClick}>
        Delete
      </button>
    );
  }

  handleClick = () => {
    const { id } = this.props;
    console.log(id);
    // api.deleteComment(id);
  };
}

export default CommentDeleter;
