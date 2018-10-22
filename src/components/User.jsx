import React, { Component } from "react";
import ArticleList from "./ArticleList";
import Comments from "./Comments";
import Usercard from "./UserCard";

class User extends Component {
  state = {
    articles: false,
    comments: false
  };
  render() {
    const { articles, comments } = this.props.location.state;
    return (
      <div>
        <Usercard user={this.props.location.state} />
        <button
          value={this.state.comments}
          name="comments"
          onClick={this.showList}
        >
          {!this.state.comments ? "Show Comments" : "Hide Comments"}
        </button>
        <button
          value={this.state.articles}
          name="articles"
          onClick={this.showList}
        >
          {!this.state.articles ? "Show Articles" : "Hide Articles"}
        </button>
        {}
        {this.state.articles ? <ArticleList articles={articles} /> : <></>}
        {this.state.comments ? (
          <Comments comments={comments} user={this.props.location.state} />
        ) : (
          <></>
        )}
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
