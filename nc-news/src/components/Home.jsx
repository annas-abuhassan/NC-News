import React, { Component } from "react";
import { Link, Router } from "@reach/router";
import ArticleList from "./ArticleList";
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
          <Link to="/topics/coding">Coding</Link>
          <Link to="/topics/cooking">Cooking</Link>
          <Link to="/topics/football">Football</Link>
        </nav>
        <main>
          <Router>
            <ArticleList path="/" />
            <ArticleList path="/topics/:id" />
          </Router>
        </main>
        <footer>Created as part of FE-2 NC-News sprint.</footer>
      </div>
    );
  }
}

export default Home;
