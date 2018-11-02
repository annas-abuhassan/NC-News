import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api.js';

class Login extends Component {
  state = {
    username: 'tickle122',
    err: null
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label>Username:</label>
        <input
          className="login-input"
          value={this.state.username}
          label="login"
          onChange={this.handleChange}
          type="text"
        />
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
        if (!user.length) throw { status: 404, msg: 'Invalid user' };
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
