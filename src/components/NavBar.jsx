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
        {topics.slice(0, 5 + showMore).map(({ slug, _id }) => {
          return (
            <Link className="nav-link" key={_id} to={`/topics/${slug}`}>
              {`nc/${slug}`}
            </Link>
          );
        })}
        <div>
          <input />
        </div>
        <div>
          {showMore + 5 >= 15 ? (
            <></>
          ) : (
            <ComponentIncDec
              className={"article-list-show-more"}
              amount={5}
              updateShowMore={this.showMore}
            />
          )}
          {showMore - 5 <= -5 ? (
            <></>
          ) : (
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
