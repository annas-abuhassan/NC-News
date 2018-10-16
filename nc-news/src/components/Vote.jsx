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
    return (
      <span className={className}>
        <button
          disabled={voteModifier === 1}
          onClick={() => this.handleVote("up", _id, type)}
        >
          Vote Up
        </button>
        <button
          disabled={voteModifier === -1}
          onClick={() => this.handleVote("down", _id, type)}
        >
          Vote Down
        </button>
        Votes: {votes + voteModifier}
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
