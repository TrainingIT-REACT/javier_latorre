import React, { createRef } from "react";
import { connect } from "react-redux";

//CSS
import "./LoginUser.css";

// Acciones
import { updateUserName } from "../actions/user";

const LoginUser = ({ closeModal, updateUserName, userList }) => {
  const input = createRef();

  const onSubmit = e => {
    e.preventDefault();
    updateUserName(input.current.value);
    input.current.value = "";
    closeModal();
  };

  return (
    <div className="LoginUser">
      <div className="wrapper">
        <p>Introduce tu nombre de usuario:</p>
        <span
          className="closingX"
          onClick={closeModal}
          role="img"
          aria-label="cerrar"
        >
          ✖️
        </span>
        <form onSubmit={onSubmit}>
          <input
            className="text-field"
            id="name"
            type="text"
            ref={input}
            placeholder="Usuario"
          />
          <button onClick={onSubmit}>
            <span role="img" aria-label="aceptar">
              ✔️
            </span>
          </button>
        </form>
        <p className="pista">Usuarios disponibles (para testeo):</p>
        <ul className="pista">
          {userList.map((user, key) => (
            <li key={key}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const userList = state.user.usersDetails.map(user => user.userName);
  return {
    userList
  };
};

const mapDispatchToProps = dispatch => ({
  updateUserName: name => dispatch(updateUserName(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginUser);
