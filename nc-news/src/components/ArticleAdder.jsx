import React, { Component } from "react";
import Popup from "reactjs-popup";
import * as api from "../api.js";

class ArticleAdder extends Component {
  state = {
    title: "",
    topic: "",
    body: ""
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
            <div className="modal">
              <div className="header"> Add Article!</div>
              <form>
                <label for="title">Title</label>
                <input
                  id="title"
                  value={title}
                  name="title"
                  onChange={this.handleChange}
                />
                <br />
                <label for="body">Body</label>
                <input
                  id="body"
                  value={body}
                  name="body"
                  onChange={this.handleChange}
                />
                <label for="topic">Topic</label>
                <input
                  id="topic"
                  value={topic}
                  name="topic"
                  onChange={this.handleChange}
                />
              </form>
              <div className="actions">
                <button
                  className="button"
                  onClick={() => {
                    const articleObj = {
                      title,
                      created_by: _id,
                      body
                    };
                    api.addArticle(articleObj, topic);
                    this.setState({
                      body: "",
                      title: "",
                      topic: ""
                    });
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
