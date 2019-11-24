import React, { createRef } from 'react';
import { connect } from 'react-redux';

// Acciones
import { updateUserName } from '../actions/user';

const LoginUser = ({ closeModal, updateUserName }) => {
  const input = createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    updateUserName(input.current.value);
    input.current.value = '';
    closeModal();
  }

  return (
    <>
      <p>Introduce tu nombre de usuario y presiona enter</p>
      <form onSubmit={onSubmit}>
        <input id="name" type="text" ref={input} placeholder="Usuario" />
        <button onClick={onSubmit} >Aceptar</button>
        <button onClick={closeModal}>Cancelar</button>
      </form>
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  updateUserName: (name) => dispatch(updateUserName(name)),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(LoginUser);