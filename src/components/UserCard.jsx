import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";
import PropTypes from "prop-types";
import cooljmessy from "../assets/avatars/cooljmessy.jpg";

class UserCard extends Component {
  state = {
    user: {
      articles: [],
      comments: []
    }
  };
  render() {
    const {
      user: { _id, username, articles, comments, avatar_url }
    } = this.state;
    const { className } = this.props;
    return (
      <div className={className}>
        <h1>
          Username:{" "}
          <Link state={this.state.user} to={`/users/${_id}`}>
            {username}
          </Link>
        </h1>
        <div>
          <img src={avatar_url} alt="avatar" />
        </div>
        <div>Articles: {articles.length}</div>
        <div>Comments: {comments.length}</div>
      </div>
    );
  }

  componentDidMount = () => {
    this.getUserActivity(this.props.user._id);
  };

  getUserActivity = _id => {
    api.getUserById(_id).then(user => this.setState({ user }));
  };
}

UserCard.propTypes = {
  className: PropTypes.string.isRequired
};
export default UserCard;
