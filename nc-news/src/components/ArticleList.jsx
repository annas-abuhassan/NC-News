import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import PropTypes from "prop-types";
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
    const { topic } = this.props;
    api.getArticles(topic).then(articles =>
      this.setState({
        articles
      })
    );
  };
}

ArticleList.propTypes = {
  topic: PropTypes.string
};

export default ArticleList;
