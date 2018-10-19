import React, { Component } from "react";
import { Link, Router } from "@reach/router";
import ArticleAdder from "./ArticleAdder";
import ArticleList from "./ArticleList";
import Article from "./Article";
import Login from "./Login";
import Logout from "./Logout";
import NotFound from "./NotFound";

import ComponentIncrementer from "./ComponentIncrementer";
import * as api from "../api.js";
import "./Home.css";
import northcoders_logo from "../assets/northcoders_logo.png";

class Home extends Component {
  state = {
    topics: [],
    showMore: 0,
    user: {}
  };

  render() {
    const { user, topics, showMore } = this.state;
    return (
      <div className="container">
        <header>
          <div className="login-logout">
            {!user.username ? (
              <Login className="login" userLogin={this.userLogin} />
            ) : (
              <Logout
                className="logout"
                user={user}
                userLogout={this.userLogout}
              />
            )}
            {user.username ? (
              <ArticleAdder addArticle={this.addArticle} user={user} />
            ) : (
              <div />
            )}
          </div>
          <img alt="Northcoders Logo" src={northcoders_logo} />
          <Link className="nav-link" to="/">
            <div className="header-tag">NEWS</div>
          </Link>
        </header>
        <nav className="nav-container">
          {topics.slice(0, 5 + showMore).map(({ slug, _id }) => {
            return (
              <Link className="nav-link" key={_id} to={`/topics/${slug}`}>
                {`nc/${slug}`}
              </Link>
            );
          })}
          <ComponentIncrementer
            className={"nav-topics-show-more"}
            amount={3}
            updateShowMore={this.showMore}
          />
        </nav>
        <main>
          <Router>
            <ArticleList path="/" />
            <ArticleList path="/topics/:topic" />
            <Article user={user} path="/articles/:id" />
            <NotFound path="/error" />
            <NotFound path="/*" />
          </Router>
        </main>
        <footer>
          <a
            href="https://www.linkedin.com/in/annas-abu-hassan-40960659/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="https://github.com/annas-abuhassan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github-square" />
          </a>
        </footer>
      </div>
    );
  }

  showMore = qty => {
    const newAmount = this.state.showMore + qty;
    if (newAmount <= 15)
      this.setState({
        showMore: newAmount
      });
  };

  componentDidMount = () => {
    const user = sessionStorage.getItem("user");
    if (user) this.userLogin(JSON.parse(user));
    api.getTopics().then(topics =>
      this.setState({
        topics
      })
    );
  };

  userLogin = user => {
    sessionStorage.setItem("user", JSON.stringify(user));
    this.setState({
      user
    });
  };

  userLogout = () => {
    sessionStorage.removeItem("username");
    this.setState({
      user: {}
    });
  };
}

export default Home;
