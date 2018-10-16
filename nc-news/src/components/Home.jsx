import React, { Component } from "react";
import { Link, Router } from "@reach/router";
import ArticleList from "./ArticleList";
import Article from "./Article";
import * as api from "../api.js";
import "./Home.css";

class Home extends Component {
  state = {
    topics: []
  };

  render() {
    return (
      <div className="container">
        <header>NC News!</header>
        <nav>
          <Link to="/">Home</Link>
          {this.state.topics.map(({ slug, title, _id }) => {
            return (
              <Link key={_id} to={`/topics/${slug}`}>
                {title}
              </Link>
            );
          })}
        </nav>
        <main>
          <Router>
            <ArticleList path="/" />
            <ArticleList path="/topics/:topic" />
            <Article path="/articles/:id" />
          </Router>
        </main>
        <footer>Created as part of FE-2 NC-News sprint.</footer>
      </div>
    );
  }

  componentDidMount = () => {
    api.getTopics().then(topics =>
      this.setState({
        topics
      })
    );
  };
}

export default Home;
