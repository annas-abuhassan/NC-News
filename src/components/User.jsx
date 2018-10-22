import React, { Component } from "react";
import ArticleList from "./ArticleList";

class User extends Component {
  render() {
    const { articles, comments } = this.props.location.state;
    return <ArticleList articles={articles} />;
  }
}

export default User;
