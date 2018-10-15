import React, { Component } from "react";
import "./ArticleCard.css";
import PropTypes from "prop-types";

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
      created_at
    } = this.props.article;
    return (
      <div className="article-card-container">
        <h1>{title}</h1>
        <span className="article-card-votes">Votes: {votes}</span>
        <span className="article-card-user">
          Submitted By: {created_by.username}
        </span>
        <span className="article-card-time">At: {created_at}</span>
        <span className="article-card-topic">Topic: {belongs_to}</span>
      </div>
    );
  }
}

ArticleCard.propTypes = {};

export default ArticleCard;
