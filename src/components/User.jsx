import React, { Component } from "react";
import ArticleList from "./ArticleList";
import Comments from "./Comments";
import Usercard from "./UserCard";
import "./User.css";
import "./Comments.css";

class User extends Component {
  state = {
    articles: false
  };
  render() {
    const { articles } = this.props.location.state;
    return (
      <div className="user-container">
        <div>
          {" "}
          <Usercard user={this.props.location.state} />
          <button
            value={this.state.articles}
            name="articles"
            onClick={this.showList}
          >
            {!this.state.articles ? "Show Articles" : "Hide Articles"}
          </button>
        </div>
        <div>{this.state.articles && <ArticleList articles={articles} />}</div>
      </div>
    );
  }

  showList = event => {
    const { name } = event.target;
    this.setState({
      [name]: this.state[name] ? false : true
    });
  };
}

export default User;
