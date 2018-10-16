import React, { Component } from "react";
import Vote from "./Vote";
import PropTypes from "prop-types";
import * as api from "../api.js";
import "./Comments.css";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    return (
      <div className="comment-list-container">
        {comments.map(comment => {
          const {
            _id,
            body,
            votes,
            created_at,
            created_by: { username }
          } = comment;
          return (
            <div className="comment-container" key={_id}>
              <div className="comment-details">
                {username} {votes} points {created_at}
              </div>
              <p className="comment-body">{body}</p>
              <Vote
                className="comment-votes"
                votes={votes}
                _id={_id}
                type={"comment"}
              />
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount = () => {
    const { id } = this.props;
    api.getArticleCommentsById(id).then(comments =>
      this.setState({
        comments
      })
    );
  };
}
Comments.propTypes = {
  id: PropTypes.string.isRequired
};
export default Comments;
