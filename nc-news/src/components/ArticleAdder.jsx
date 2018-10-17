import React, { Component } from "react";
import Popup from "reactjs-popup";
import "./ArticleAdder.css";
import * as api from "../api.js";

class ArticleAdder extends Component {
  state = {
    title: "",
    topic: "",
    body: "",
    validArticle: false
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
                    value={title}
                    name="title"
                    className="add-article-title"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="topic-container">
                  <label htmlFor="topic">Topic: </label>
                  <input
                    id="topic"
                    value={topic}
                    name="topic"
                    className="add-article-topic"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="body-container">
                  <label htmlFor="body">Body: </label>
                  <input
                    id="body"
                    value={body}
                    name="body"
                    className="add-article-body"
                    onChange={this.handleChange}
                  />
                </div>
              </form>
              <div className="actions">
                <button
                  className="button"
                  onClick={() => {
                    const articleObj = { title, created_by: _id, body };
                    api.addArticle(articleObj, topic);
                    this.setState({ body: "", title: "", topic: "" });
                    close();
                  }}
                >
                  Submit!
                </button>
                <button
                  className="button"
                  onClick={() => {
                    console.log("CLOSING ARTICLE SUBMISSION!!");
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
      [name]: value
    });
  };
}

export default ArticleAdder;
