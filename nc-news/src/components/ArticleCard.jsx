import React, { Component } from "react";
import { Link } from "@reach/router";
import PropTypes from "prop-types";
import Vote from "./Vote";
import "./ArticleCard.css";

class ArticleCard extends Component {
  state = {
    voteCount: 0
  };

  render() {
    const {
      title,
      votes,
      created_by,
      belongs_to,
      created_at,
      _id
    } = this.props.article;
    return (
      <div className="article-card-container">
        <Vote
          className={"article-card-votes"}
          votes={votes}
          _id={_id}
          type={"article"}
        />
        <div className="article-card-main">
          <div className="article-card-details">
            <Link className="article-card-topic" to={`/topics/${belongs_to}`}>
              <span>{`nc/${belongs_to}`}</span>
            </Link>
            <span className="article-card-user">
              Submitted By: {created_by.username}
            </span>
            <span className="article-card-time">At: {created_at}</span>
          </div>
          <Link
            className={"article-card-title"}
            to={`/articles/${_id}`}
            key={_id}
          >
            <span>{title}</span>
          </Link>
        </div>
      </div>
    );
  }
}

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
  votes: PropTypes.objectOf(PropTypes.number.isRequired),
  title: PropTypes.objectOf(PropTypes.string.isRequired),
  created_by: PropTypes.objectOf(PropTypes.string.isRequired),
  belongs_to: PropTypes.objectOf(PropTypes.string.isRequired),
  created_at: PropTypes.objectOf(PropTypes.string.isRequired),
  _id: PropTypes.objectOf(PropTypes.string.isRequired)
};

export default ArticleCard;
