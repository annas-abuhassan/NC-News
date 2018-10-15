import React, { Component } from "react";
import "./ArticleCard.css";

class ArticleCard extends Component {
  state = {
    voteCount: 0
  };

  render() {
    return (
      <div className="article-card-container">
        <header>{this.props.article.title}</header>
      </div>
    );
  }
}

export default ArticleCard;
