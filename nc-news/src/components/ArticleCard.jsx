import React, { Component } from "react";
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
        <h1>{title}</h1>
        <Vote votes={votes} _id={_id} type={"article"} />
        <span className="article-card-user">
          Submitted By: {created_by.username}
        </span>
        <span className="article-card-time">At: {created_at}</span>
        <span className="article-card-topic">Topic: {belongs_to}</span>
      </div>
    );
  }
}

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
  votes: PropTypes.objectOf(PropTypes.number),
  title: PropTypes.objectOf(PropTypes.string),
  created_by: PropTypes.objectOf(PropTypes.string),
  belongs_to: PropTypes.objectOf(PropTypes.string),
  created_at: PropTypes.objectOf(PropTypes.string)
  // _id: PropTypes.objectOf(PropTypes.string).isRequired
};

export default ArticleCard;
