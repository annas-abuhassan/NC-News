import React, { Component } from "react";
import { Link, Router } from "@reach/router";
import ArticleList from "./ArticleList";
import Article from "./Article";
import Login from "./Login";
import * as api from "../api.js";
import "./Home.css";

class Home extends Component {
  state = {
    topics: [],
    user: {}
  };

  render() {
    const { user } = this.state;
    return (
      <div className="container">
        <header>NC News!</header>
        <nav>
          <Link className="nav-link" to="/">
            Home
          </Link>
          {this.state.topics.map(({ slug, title, _id }) => {
            return (
              <Link className="nav-link" key={_id} to={`/topics/${slug}`}>
                {title}
              </Link>
            );
          })}
          <Login userLogin={this.userLogin} />
        </nav>
        <main>
          <Router>
            <ArticleList path="/" />
            <ArticleList path="/topics/:topic" />
            <Article user={user} path="/articles/:id" />
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

  userLogin = user => {
    this.setState({
      user
    });
  };
}

export default Home;
