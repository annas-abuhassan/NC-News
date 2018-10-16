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
        <label>Article Filter: </label>
        <input />
        {this.state.articles.map(article => {
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
    if (!this.props.id)
      api.getArticles().then(articles =>
        this.setState({
          articles
        })
      );
    else {
      api.getArticlesByTopic(this.props.id).then(articles =>
        this.setState({
          articles
        })
      );
    }
  };
}

export default ArticleList;
