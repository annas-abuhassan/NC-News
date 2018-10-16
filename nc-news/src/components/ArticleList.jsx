import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api.js";

class ArticleList extends Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;
    return (
      <>
        {articles.map(article => {
          return <ArticleCard key={article._id} article={article} />;
        })}
      </>
    );
  }

  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      this.fetchArticles();
    }
  };

  componentDidMount = () => {
    this.fetchArticles();
  };

  fetchArticles = () => {
    api.getArticles(this.props.topic).then(articles =>
      this.setState({
        articles
      })
    );
  };
}

export default ArticleList;
