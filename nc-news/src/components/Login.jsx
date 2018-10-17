import React, { Component } from "react";
import * as api from "../api.js";

class Login extends Component {
  state = {
    username: ""
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" />
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
