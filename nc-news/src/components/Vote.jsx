import React, { Component } from "react";
import PropTypes from "prop-types";
import * as api from "../api.js";

class Vote extends Component {
  state = {
    voteModifier: 0
  };

  render() {
    const { votes, _id, type, className } = this.props;
    const { voteModifier } = this.state;
    const { handleVote } = this;

    return (
      <span className={className}>
        <div className="vote-container">
          <a href="#" class="hvr-icon-forward">
            <i class="fa fa-chevron-circle-up hvr-icon" />
          </a>
          <button
            className="vote-up"
            disabled={voteModifier === 1}
            onClick={() => handleVote("up", _id, type)}
          >
            Vote Up
          </button>
          <p className="vote-count">{votes + voteModifier}</p>
          <a href="#" class="hvr-icon-forward">
            <i class="fa fa-chevron-circle-down hvr-icon" />
          </a>
          <button
            className="vote-down"
            disabled={voteModifier === -1}
            onClick={() => handleVote("down", _id, type)}
          >
            Vote Down
          </button>
        </div>
      </span>
    );
  }

  handleVote = (updown, _id, type) => {
    api.makeVote(updown, _id, type);
    this.setState(state => ({
      voteModifier: updown === "up" ? 1 : -1
    }));
  };
}

Vote.propTypes = {
  votes: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Vote;
