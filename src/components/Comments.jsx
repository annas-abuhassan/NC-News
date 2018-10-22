import React, { Component } from "react";
import Vote from "./Vote";
import moment from "moment";
import CommentAdder from "./CommentAdder";
import PropTypes from "prop-types";
import LoadingSpinner from "./LoadingSpinner";
import * as api from "../api.js";
import "./Comments.css";

class Comments extends Component {
  state = {
    comments: [],
    loaded: false,
    addComments: true
  };
  render() {
    const { comments, loaded, addComments } = this.state;
    const { user } = this.props;

    return !loaded ? (
      <LoadingSpinner />
    ) : (
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
                Posted By: {`${username} ${moment(created_at).fromNow()}`}
              </div>
              <span className="comment-body">{body}</span>
              <Vote
                className="comment-votes"
                votes={votes}
                _id={_id}
                type={"comment"}
              />
              {user.username === username ? (
                <button onClick={() => this.deleteComment(_id)}>Delete!</button>
              ) : (
                <></>
              )}
            </div>
          );
        })}
        {addComments ? (
          user.username ? (
            <CommentAdder
              commentCount={comments.length}
              addComment={this.addComment}
              className="comment-adder-container"
              user={user}
            />
          ) : (
            <h1>Login to add a comment!</h1>
          )
        ) : (
          <></>
        )}
      </div>
    );
  }

  deleteComment = id => {
    this.setState({
      loaded: false
    });
    api.deleteComment(id).then(() => {
      this.setState({ comments: [] });
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

  componentDidUpdate = prevProps => {
    const { id } = this.props;
    if (prevProps !== this.props) this.fetchComments(id);
  };

  componentDidMount = () => {
    const { id } = this.props;
    this.fetchComments(id);
  };

  fetchComments = id => {
    const { comments } = this.props;
    if (!comments) {
      api
        .getArticleCommentsById(id)
        .then(comments => {
          this.setState({
            comments,
            loaded: true
          });
        })
        .catch(err => {
          this.setState({
            comments: [],
            loaded: true
          });
        });
    } else {
      this.setState({
        comments,
        loaded: true,
        addComments: false
      });
    }
  };
}
Comments.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};
export default Comments;
