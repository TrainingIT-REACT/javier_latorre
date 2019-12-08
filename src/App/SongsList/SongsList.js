import React from "react";
import { connect } from "react-redux";

// Css
import "./SongsList.css";

// Acciones
import { playSong } from "../actions/player";

const SongsList = ({ canciones, playSong }) => {
  const playThisSong = cancion => {
    const { name, audio } = cancion;
    playSong(name, audio, new Date());
  };

  return (
    <div className="songs-list">
      {canciones &&
        canciones.map(cancion => (
          <p key={cancion.id}>
            <span onClick={() => playThisSong(cancion)} className="song-name">
              {cancion.name}
            </span>
            <span className="song-duration">({cancion.seconds} s)</span>
          </p>
        ))}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  playSong: (songTitle, songAudio, dateTime) =>
    dispatch(playSong(songTitle, songAudio, dateTime))
});

export default connect(() => ({}), mapDispatchToProps)(SongsList);
