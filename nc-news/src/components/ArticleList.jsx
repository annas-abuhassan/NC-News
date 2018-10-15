import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api.js";

class ArticleList extends Component {
  state = {
    articles: []
  };
  render() {
    return (
      <>
        {this.state.articles.map(article => {
          return <ArticleCard key={article._id} article={article} />;
        })}
      </>
    );
  }

  componentDidMount = () => {
    api.getArticles().then(articles =>
      this.setState({
        articles
      })
    );
  };
}

export default ArticleList;
