import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import LoadingSpinner from "./LoadingSpinner";
import ScrollButton from "./ScrollButton";
import "./ArticleList.css";
import PropTypes from "prop-types";
import ComponentIncrementer from "./ComponentIncrementer";
import * as api from "../api.js";

class ArticleList extends Component {
  state = {
    articles: [],
    showMore: 0
  };

  render() {
    const { articles, showMore } = this.state;
    return !articles.length ? (
      <LoadingSpinner />
    ) : (
      <div className="article-list-container">
        {articles.slice(0, 10 + showMore).map(article => {
          return <ArticleCard key={article._id} article={article} />;
        })}
        <ComponentIncrementer
          className={"article-list-show-more"}
          amount={5}
          updateShowMore={this.showMore}
        />
        <ScrollButton />
      </div>
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

  showMore = qty => {
    const newAmount = this.state.showMore + qty;
    this.setState({
      showMore: newAmount
    });
  };
}

ArticleList.propTypes = {
  topic: PropTypes.string
};

export default ArticleList;
