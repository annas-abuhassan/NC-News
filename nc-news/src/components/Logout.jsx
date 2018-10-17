import React, { Component } from "react";

class Logout extends Component {
  render() {
    const { user, userLogout } = this.props;
    return (
      <div>
        Logged in as {user.username}
        <button
          onClick={() => {
            userLogout();
          }}
        >
          Logout!
        </button>
      </div>
    );
  }
}



export default Logout;
