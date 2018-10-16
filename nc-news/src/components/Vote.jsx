import React, { Component } from "react";
import PropTypes from "prop-types";
import * as api from "../api.js";

class Vote extends Component {
  state = {
    votes: 0,
    _id: "",
    type: "",
    up: false,
    down: false
  };

  render() {
    return (
      <span className="article-card-votes">
        <button disabled={this.state.up} onClick={() => this.handleVote("up")}>
          Vote Up
        </button>
        <button
          disabled={this.state.down}
          onClick={() => this.handleVote("down")}
        >
          Vote Down
        </button>
        Votes: {this.state.votes}
      </span>
    );
  }

  handleVote = updown => {
    api.makeVote(updown, this.state._id, this.state.type).then(data => {
      if (this.state.up === true || this.state.down === true)
        this.setState({
          votes: data.votes,
          up: false,
          down: false
        });
      else
        this.setState({
          votes: data.votes,
          up: updown === "up" ? true : false,
          down: updown === "down" ? true : false
        });
    });
  };

  componentDidMount = () => {
    const { votes, _id, type } = this.props;
    this.setState({
      votes: votes,
      _id: _id,
      type: type
    });
  };
}

Vote.propTypes = {
  votes: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Vote;
