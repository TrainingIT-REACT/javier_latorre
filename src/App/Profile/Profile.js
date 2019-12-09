import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { ROOT } from "../constants";
import { updateUserDetails, updateUserName } from "../actions/user";
import Form from "./Form";

// Css
import "./Profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteGenres: props.userDetails.favoriteGenres,
      description: props.userDetails.description,
      fullName: props.userDetails.fullName,
      salvadoPendiente: false
    };
  }

  updateFieldsState = (name, value) => {
    this.setState({ [name]: value, salvadoPendiente: true });
  };

  updateStore = () => {
    const userDetails = {
      userName: this.props.name,
      fullName: this.state.fullName,
      description: this.state.description,
      favoriteGenres: this.state.favoriteGenres
    };
    this.props.updateUserDetails(userDetails);
    this.setState({ salvadoPendiente: false });
  };

  logOut = () => {
    this.props.updateUserName("");
  };

  render() {
    const { name, songHistory } = this.props;
    if (name === "") {
      return <Redirect to={ROOT} />;
    }
    const {
      favoriteGenres,
      description,
      fullName,
      salvadoPendiente
    } = this.state;
    return (
      <div className="Profile">
        <h1>Perfil de {name}</h1>
        <Form
          favoriteGenres={favoriteGenres}
          description={description}
          fullName={fullName}
          updateFieldsState={this.updateFieldsState}
        />
        {salvadoPendiente && (
          <button className="boton-salvar" onClick={this.updateStore}>
            <span role="img" aria-label="salvar">
              💾 Salvar cambios
            </span>
          </button>
        )}
        <button className="boton-logout" onClick={this.logOut}>
          <span className="default" role="img" aria-label="logout">
            😲 LogOut!
          </span>
          <span className="hover" role="img" aria-label="logout">
            😭 LogOut!
          </span>
        </button>
        {songHistory.length > 0 && (
          <div className="historial-container">
            <p>Historial de últimas canciones escuchadas:</p>
            <ul>
              {songHistory.map((song, key) => (
                <li key={key}>
                  <span className="fecha">{song.dateTime.toISOString()}:</span>{" "}
                  {song.songTitle}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const userName = state.user.name;
  const userDetailsSearch = state.user.usersDetails.filter(
    user => user.userName === userName
  );
  const userDetails =
    userDetailsSearch.length === 1
      ? userDetailsSearch[0]
      : { userName, fullName: "", description: "", favoriteGenres: [] };

  return {
    ...state,
    name: userName,
    userDetails
  };
};

const mapDispatchToProps = dispatch => ({
  updateUserDetails: userDetails => dispatch(updateUserDetails(userDetails)),
  updateUserName: name => dispatch(updateUserName(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
