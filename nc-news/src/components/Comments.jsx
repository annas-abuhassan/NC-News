import React, { Component } from "react";
import Vote from "./Vote";
import CommentAdder from "./CommentAdder";
import PropTypes from "prop-types";
import * as api from "../api.js";
import "./Comments.css";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    const { user } = this.props;
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
                Created by:
                {username}
                <br />
                Time: {created_at}
              </div>
              <span className="comment-body">{body}</span>
              <Vote
                className="comment-votes"
                votes={votes}
                _id={_id}
                type={"comment"}
              />
              {user.username === username ? (
                <button onClick={() => this.deleteComment(_id)}>
                  New Delete Button
                </button>
              ) : (
                <></>
              )}
            </div>
          );
        })}
        <CommentAdder
          addComment={this.addComment}
          className="comment-adder-container"
        />
      </div>
    );
  }

  deleteComment = id => {
    api.deleteComment(id).then(() => {
      this.fetchComments(this.props.id);
    });
  };

  addComment = body => {
    const {
      id,
      user: { username, _id }
    } = this.props;

    const commentObj = {
      created_by: _id,
      body
    };

    api.addComment(commentObj, id).then(comment => {
      comment.created_by = { username: username };
      this.setState({
        comments: [...this.state.comments, comment]
      });
    });
  };

  componentDidMount = () => {
    const { id } = this.props;
    this.fetchComments(id);
  };

  fetchComments = id => {
    api.getArticleCommentsById(id).then(comments => {
      this.setState({
        comments
      });
    });
  };
}
Comments.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};
export default Comments;
