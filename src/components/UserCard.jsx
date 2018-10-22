import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";
import PropTypes from "prop-types";

class UserCard extends Component {
  state = {
    user: {
      articles: [],
      comments: []
    }
  };
  render() {
    const {
      user: { _id, username, avatar_url, articles, comments }
    } = this.state;
    return (
      <div className="user-card">
        <h1>
          Username: <Link to={`/users/${_id}`}>{username}</Link>
        </h1>
        <div>
          <img
            src={
              "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729"
            }
            alt="avatar"
          />
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

UserCard.propTypes = {};
export default UserCard;
