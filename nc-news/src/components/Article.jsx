import React, { Component } from "react";
import moment from "moment";
import LoadingSpinner from "./LoadingSpinner";
import { Link, navigate } from "@reach/router";
import Comments from "./Comments";
import Vote from "./Vote";
import PropTypes from "prop-types";
import "./Article.css";
import * as api from "../api.js";

class Article extends Component {
  state = {
    article: {}
  };
  render() {
    const {
      article: { title, body, created_at, created_by, belongs_to, _id, votes }
    } = this.state;
    const { id, user } = this.props;
    return !created_by ? (
      <LoadingSpinner />
    ) : (
      <div className="article-main-container">
        <div>
          <div className="article-main-main">
            <Vote
              className={"article-main-votes"}
              votes={votes}
              _id={_id}
              type={"article"}
            />
            <div className="article-main-details">
              <Link className="article-main-topic" to={`/topics/${belongs_to}`}>
                <span>{`nc/${belongs_to}`}</span>
              </Link>
              <span className="article-main-user">
                Posted By: {`${created_by.username}`}
              </span>
              <span className="article-main-time">
                {moment(created_at).fromNow()}
              </span>
            </div>
            <h1 className="article-main-title">{title}</h1>
            <p className="article-main-body">{body}</p>
          </div>
          <div className="article-main-comments">
            <Comments user={user} id={id} />{" "}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    const { id } = this.props;
    api
      .getArticleById(id)
      .then(article => {
        this.setState({ article });
      })
      .catch(err => {
        console.log(err);
        navigate("/error", {
          replace: true,
          state: {
            code: err.code,
            message: "This Article ID does not exist!",
            from: "/articles"
          }
        });
      });
  };

  componentDidUpdate = prevProps => {
    const { id } = this.props;
    if (this.props.location.state.article && prevProps !== this.props) {
      api
        .getArticleById(id)
        .then(article => {
          this.setState({ article });
        })
        .catch(err => console.log(err));
    }
  };
}

Article.propTypes = {
  id: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default Article;
