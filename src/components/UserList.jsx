import React, { Component } from "react";
import Usercard from "./UserCard";
import * as api from "../api";

class UserList extends Component {
  state = {
    users: []
  };
  render() {
    const { users } = this.state;
    return (
      <div className="user-container">
        {users.map(user => {
          return (
            <Usercard className={"user-card"} key={user._id} user={user} />
          );
        })}
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchUsers();
  };
  fetchUsers = () => {
    api.getUsers().then(users =>
      this.setState({
        users
      })
    );
  };
}

export default UserList;
