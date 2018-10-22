import React, { Component } from "react";
import ArticleList from "./ArticleList";
import Comments from "./Comments";

class User extends Component {
  render() {
    console.log(this.props.location.state);
    const { articles, comments } = this.props.location.state;
    return (
      <div>
        <Comments comments={comments} user={this.props.location.state} />
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default User;
