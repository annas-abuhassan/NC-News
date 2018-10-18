import React, { Component } from "react";
import { Link, Router } from "@reach/router";
import ArticleAdder from "./ArticleAdder";
import ArticleList from "./ArticleList";
import Article from "./Article";
import Login from "./Login";
import Logout from "./Logout";
import * as api from "../api.js";
import "./Home.css";

class Home extends Component {
  state = {
    topics: [],
    user: {}
  };

  render() {
    const { user, topics } = this.state;
    const { userLogin, userLogout } = this;
    return (
      <div className="container">
        <header>
          <img
            alt="Northcoders Logo"
            src="https://northcoders.com/images/logos/learn_to_code_manchester_rw_second.png"
          />
          <Link className="nav-link" to="/">
            <p className="header-tag">NEWS</p>
          </Link>
        </header>
        <nav className="nav-container">
          {topics.map(({ slug, title, _id }) => {
            return (
              <Link className="nav-link" key={_id} to={`/topics/${slug}`}>
                {`nc/${slug}`}
              </Link>
            );
          })}
          {!user.username ? (
            <Login className="nav-login" userLogin={userLogin} />
          ) : (
            <Logout
              className="nav-logout"
              user={user}
              userLogout={userLogout}
            />
          )}
          {user.username ? <ArticleAdder user={user} /> : <div />}
        </nav>
        <main>
          <Router>
            <ArticleList path="/" />
            <ArticleList path="/topics/:topic" />
            <Article user={user} path="/articles/:id" />
          </Router>
        </main>
        <footer>
          <a
            href="https://www.linkedin.com/in/annas-abu-hassan-40960659/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin" />
          </a>
          <a
            href="https://github.com/annas-abuhassan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github-square" />
          </a>
        </footer>
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

  userLogout = () => {
    this.setState({
      user: {}
    });
  };
}

export default Home;
