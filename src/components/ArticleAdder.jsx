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
    err: { body: true, title: true, topic: true }
  };

  render() {
    const { title, body, topic, err } = this.state;
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
                  <p className={!err.title ? "valid-input" : "invalid-input"}>
                    {title.length
                      ? "Titles must be between between 5 and 15 characters!"
                      : ""}
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
                  <p className={!err.topic ? "valid-input" : "invalid-input"}>
                    {topic.length
                      ? "Topic must be between between 5 and 15 characters, also this will be converted to kebabCase!"
                      : ""}
                  </p>
                </div>
                <div className="body-container">
                  <textarea
                    id="body"
                    name="body"
                    className="add-article-body"
                    onChange={this.handleChange}
                    placeholder="What are you thinking about?"
                  />
                  <p className={!err.body ? "valid-input" : "invalid-input"}>
                    {body.length
                      ? "Body must consist of at least 10 characters! Write something meaningful!"
                      : ""}
                  </p>
                </div>
              </form>
              <div className="actions">
                <button
                  className="button"
                  disabled={err.body || err.title || err.topic}
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
    this.setState({
      [name]: value,
      err: {
        ...this.state.err,
        [name]: utils.checkValidity(name, value) ? false : true
      }
    });
  };
}

ArticleAdder.propTypes = {
  _id: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default ArticleAdder;
