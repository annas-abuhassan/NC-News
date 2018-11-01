import React from 'react';
import './Logout.css';

function Logout(props) {
  const { user, userLogout } = props;
  return (
    <form className="form">
      <label>Logged in as: {user.username}</label>
      <button
        className="logout-button"
        onClick={() => {
          userLogout();
        }}
      >
        Logout!
      </button>
    </form>
  );
}

export default Logout;
