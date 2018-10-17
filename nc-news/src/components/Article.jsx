import React, { Component } from "react";
import Comments from "./Comments";
import Vote from "./Vote";
import "./Article.css";
import * as api from "../api.js";

class Article extends Component {
  state = {
    article: {}
  };
  render() {
    const {
      article: {
        title,
        body,
        created_at,
        comment_count,
        created_by,
        _id,
        votes
      }
    } = this.state;
    const { id, user } = this.props;
    return (
      <div className="article-main-container">
        {created_by ? (
          <div>
            <h1 className="article-main-title">Title: {title}</h1>
            <Vote
              className={"article-main-votes"}
              votes={votes}
              _id={_id}
              type={"article"}
            />
            <h1>Submitted: {created_at}</h1>
            <h1>Comment Count: {comment_count}</h1>
            <p>{body}</p> <Comments user={user} id={id} />
          </div>
        ) : (
          <h1>I AM LOADING U FOOL</h1>
        )}
      </div>
    );
  }

  componentDidMount = () => {
    const { id } = this.props;
    api.getArticleById(id).then(article =>
      this.setState({
        article
      })
    );
  };
}

export default Article;
