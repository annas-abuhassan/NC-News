import React from "react";
import PropTypes from "prop-types";
import Login from "./Login";
import Logout from "./Logout";
import ArticleAdder from "./ArticleAdder";

function LoginSplash(props) {
  const { user, userLogin, userLogout } = props;
  return (
    <div className="login-logout">
      {!user.username ? (
        <Login className="login" userLogin={userLogin} />
      ) : (
        <Logout className="logout" user={user} userLogout={userLogout} />
      )}
      {user.username ? <ArticleAdder user={user} /> : <div />}
    </div>
  );
}

LoginSplash.propTypes = {
  user: PropTypes.object.isRequired,
  userLogin: PropTypes.func.isRequired,
  userLogout: PropTypes.func.isRequired
};

export default LoginSplash;
