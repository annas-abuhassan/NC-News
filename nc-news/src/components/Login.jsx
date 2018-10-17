import React, { Component } from "react";
import "./Login.css";
import * as api from "../api.js";

class Login extends Component {
  state = {
    username: ""
  };

  render() {
    const { handleSubmit, handleChange } = this;
    return (
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input label="login" onChange={handleChange} type="text" />
        <button>Login!</button>
      </form>
    );
  }

  handleSubmit = event => {
    const { userLogin } = this.props;
    event.preventDefault();
    api.getUser(this.state.username).then(user => userLogin(user));
  };

  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  };
}

export default Login;
