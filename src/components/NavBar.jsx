import React, { Component } from "react";
import ComponentIncDec from "./ComponentIncDec";
import { Link } from "@reach/router";
import * as api from "../api";

class NavBar extends Component {
  state = {
    topics: [],
    showMore: 0
  };
  render() {
    const { topics, showMore } = this.state;
    return (
      <div>
        <Link className="nav-link" to="/users">
          Users
        </Link>
        {topics.slice(0, 5 + showMore).map(({ slug, _id }) => {
          return (
            <Link className="nav-link" key={_id} to={`/topics/${slug}`}>
              {`nc/${slug}`}
            </Link>
          );
        })}
        <div>
          {showMore + 5 <= 15 &&
            showMore + 5 <= topics.length && (
              <ComponentIncDec
                className={"article-list-show-more"}
                amount={5}
                updateShowMore={this.showMore}
              />
            )}
          {showMore - 5 >= 1 && (
            <ComponentIncDec
              className={"article-list-show-more"}
              amount={-5}
              updateShowMore={this.showMore}
            />
          )}
        </div>
      </div>
    );
  }

  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      console.log("getting topics");
      api.getTopics().then(topics =>
        this.setState({
          topics
        })
      );
    }
  };
  componentDidMount = () => {
    api.getTopics().then(topics =>
      this.setState({
        topics
      })
    );
  };

  showMore = qty => {
    const newAmount = this.state.showMore + qty;
    if (newAmount <= 15)
      this.setState({
        showMore: newAmount
      });
  };
}

export default NavBar;
