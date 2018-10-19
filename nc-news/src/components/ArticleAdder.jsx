import React, { Component } from "react";
import { navigate } from "@reach/router";
import Popup from "reactjs-popup";
import PropTypes from "prop-types";
import "./ArticleAdder.css";
import * as api from "../api.js";
import * as utils from "./utils/index.js";
import kebabCase from "lodash/kebabCase";

class ArticleAdder extends Component {
  state = {
    title: "",
    topic: "",
    body: "",
    err: true
  };

  render() {
    const { title, body, topic } = this.state;
    const {
      user: { _id }
    } = this.props;

    return (
      <div>
        <Popup
          trigger={<button className="button">Add a new article!</button>}
          modal
        >
          {close => (
            <div className="add-article-container">
              <form>
                <div className="title-container">
                  <label htmlFor="title">Title: </label>
                  <input
                    id="title"
                    name="title"
                    className="add-article-title"
                    onChange={this.handleChange}
                    placeholder="Title"
                  />
                  <p className={title ? "valid-input" : "invalid-input"}>
                    Titles must be between between 5 and 15 characters!
                  </p>
                </div>
                <div className="topic-container">
                  <label htmlFor="topic">Topic: </label>
                  <input
                    id="topic"
                    name="topic"
                    className="add-article-topic"
                    onChange={this.handleChange}
                    placeholder="Topic"
                  />
                  <p className={topic ? "valid-input" : "invalid-input"}>
                    Topic must be between between 5 and 15 characters, also this
                    will be converted to kebabCase!
                  </p>
                </div>
                <div className="body-container">
                  <input
                    id="body"
                    name="body"
                    className="add-article-body"
                    onChange={this.handleChange}
                    placeholder="What are you thinking about?"
                  />
                  <p className={body ? "valid-input" : "invalid-input"}>
                    Body must consist of at least 10 characters! Write something
                    meaningful!
                  </p>
                </div>
              </form>
              <div className="actions">
                <button
                  className="button"
                  disabled={this.state.err}
                  onClick={() => {
                    const articleObj = { title, created_by: _id, body };
                    api
                      .addArticle(articleObj, kebabCase(topic))
                      .then(article => {
                        this.setState({ body: "", title: "", topic: "" });
                        close();
                        navigate(`/articles/${article._id}`, {
                          state: { article }
                        });
                      });
                  }}
                >
                  Submit!
                </button>
                <button
                  className="button"
                  onClick={() => {
                    close();
                  }}
                >
                  Cancel!
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    const { body, title, topic } = this.state;
    if (utils.checkValidity(name, value)) {
      this.setState({ [name]: value }, () => {
        if (body && title && topic)
          this.setState({
            err: false
          });
      });
    } else {
      this.setState({
        [name]: "",
        err: true
      });
    }
  };
}

ArticleAdder.propTypes = {
  _id: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default ArticleAdder;
