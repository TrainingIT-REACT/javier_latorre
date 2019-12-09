import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { ROOT, ALBUMS, USER } from "../constants";

// Css
import "./NavBar.css";

const NavBar = ({ name, openLoginUserModal, history }) => {
  const goToUserProfile = () => {
    history.push(USER);
  };

  return (
    <div className="NavBar">
      <div className="logo">
        <Link to={ROOT}>
          <span className="logo_first">Musi</span>
          <span className="logo_last">K</span>
        </Link>
      </div>
      <div className="albums">
        <Link to={ALBUMS}>Albums</Link>
      </div>
      {name === "" ? (
        <div onClick={openLoginUserModal} className="user">
          <span>Login {name}</span>
        </div>
      ) : (
        <div onClick={goToUserProfile} className="user">
          <span>
            <span className="user-icon" role="img" aria-label="user-icon">
              🙂
            </span>
            <span
              className="user-icon hover"
              role="img"
              aria-label="user-icon-hover"
            >
              😎
            </span>
            {name}
          </span>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    name: state.user.name
  };
};

export default connect(mapStateToProps)(withRouter(NavBar));
