import React, { Component } from "react";
import { navigate } from "@reach/router";
import ArticleCard from "./ArticleCard";
import LoadingSpinner from "./LoadingSpinner";
import ScrollButton from "./ScrollButton";
import "./ArticleList.css";
import PropTypes from "prop-types";
import ComponentIncDec from "./ComponentIncDec";
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
        {showMore + 10 >= articles.length ? (
          <></>
        ) : (
          <ComponentIncDec
            className={"article-list-show-more"}
            amount={5}
            updateShowMore={this.showMore}
          />
        )}
        {showMore - 10 <= -10 ? (
          <></>
        ) : (
          <ComponentIncDec
            className={"article-list-show-more"}
            amount={-5}
            updateShowMore={this.showMore}
          />
        )}
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
    const { topic, articles } = this.props;
    if (!articles) {
      api.getArticles(topic).then(articles => {
        articles.length
          ? this.setState({
              articles
            })
          : navigate("/error", {
              replace: true,
              state: { message: "Topic does not exist!", from: "/topics" }
            });
      });
    } else this.setState({ articles });
  };

  showMore = qty => {
    const newAmount = this.state.showMore + qty;
    if (newAmount !== -5)
      this.setState({
        showMore: newAmount
      });
  };
}

ArticleList.propTypes = {
  topic: PropTypes.string
};

export default ArticleList;
