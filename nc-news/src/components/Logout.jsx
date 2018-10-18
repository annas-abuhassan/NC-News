import React from "react";

function Logout(props) {
  const { user, userLogout } = props;
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

export default Logout;
