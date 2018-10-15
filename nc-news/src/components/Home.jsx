import React, { Component } from "react";
import { Link } from "@reach/router";
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
          <Link to="/topics/coding/articles">Coding</Link>
          <Link to="/topics/cooking/articles">Cooking</Link>
          <Link to="/topics/football/articles">Football</Link>
        </nav>
        <main>
          <ArticleList />
        </main>
        <footer>Created as part of FE-2 NC-News sprint.</footer>
      </div>
    );
  }
}

export default Home;
