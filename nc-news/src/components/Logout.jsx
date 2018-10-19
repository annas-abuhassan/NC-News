import React from "react";

function Logout(props) {
  const { user, userLogout, className } = props;
  return (
    <div className={className}>
      Logged in as {user.username}
      <button
        className="logout-button"
        onClick={() => {
          userLogout();
        }}
      >
        Logout!
      </button>
    </div>
  );
}

export default Logout;