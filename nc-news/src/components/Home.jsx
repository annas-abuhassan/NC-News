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
        <header>NC News!</header>
        <nav className="nav-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          {topics.map(({ slug, title, _id }) => {
            return (
              <Link className="nav-link" key={_id} to={`/topics/${slug}`}>
                {title}
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

  userLogout = () => {
    this.setState({
      user: {}
    });
  };
}

export default Home;
