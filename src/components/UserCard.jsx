import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";
import PropTypes from "prop-types";
import image404 from "../assets/image404.png";

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
          <Link
            className="username"
            state={this.state.user}
            to={`/users/${_id}`}
          >
            {username}
          </Link>
        </h1>
        <div>
          <img onError={this.addDefaultSrc} src={avatar_url} alt="avatar" />
        </div>
        <div className="details">
          <div>Articles: {articles.length}</div>
          <div>Comments: {comments.length}</div>
        </div>
      </div>
    );
  }

  addDefaultSrc = event => {
    event.target.src = image404;
  };

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
