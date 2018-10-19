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
      <div className={className}>
        <i
          className={
            voteModifier === 1 ? "" : "fa fa-chevron-circle-up hvr-icon"
          }
          onClick={() =>
            voteModifier !== 1 ? handleVote("up", _id, type) : voteModifier
          }
        />
        <p className="vote-count">{votes + voteModifier}</p>
        <i
          className={
            voteModifier === -1 ? "" : "fa fa-chevron-circle-down hvr-icon"
          }
          onClick={() =>
            voteModifier !== -1 ? handleVote("down", _id, type) : -1
          }
        />
      </div>
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
