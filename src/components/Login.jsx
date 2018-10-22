import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Login.css";
import * as api from "../api.js";

class Login extends Component {
  state = {
    username: "",
    err: null
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username:</label>
        <input label="login" onChange={this.handleChange} type="text" />
        <button className="login-button">Login!</button>
        {this.state.err ? <p>User does not exist!</p> : <></>}
      </form>
    );
  }

  handleSubmit = event => {
    const { userLogin } = this.props;
    event.preventDefault();
    api
      .getUsers(this.state.username)
      .then(user => {
        userLogin(user[0]);
      })
      .catch(err =>
        this.setState({
          err
        })
      );
  };

  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  };
}

Login.propTypes = {
  userLogin: PropTypes.func.isRequired
};

export default Login;
