import React, { Component } from "react";
import "./App.css";
import LoginSplash from "./components/LoginSplash";
import { Link, Router } from "@reach/router";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import northcoders_logo from "./assets/northcoders_logo.png";

class App extends Component {
  state = {
    user: {}
  };

  render() {
    const { user } = this.state;
    return (
      <div className="container">
        <header>
          <LoginSplash
            user={user}
            userLogin={this.userLogin}
            userLogout={this.userLogout}
            addArticle={this.addArticle}
          />
          <img alt="Northcoders Logo" src={northcoders_logo} />
          <Link className="nav-link" to="/">
            <div className="header-tag">NEWS</div>
          </Link>
        </header>
        <nav className="nav-container">
          <NavBar />
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

export default App;
