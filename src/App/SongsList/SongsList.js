import React from "react";

// Css
import "./SongsList.css";

const SongsList = ({ canciones }) => {
  return (
    <div className="songs-list">
      {canciones &&
        canciones.map(cancion => (
          <p key={cancion.id}>
            <span className="song-name">{cancion.name}</span>
            <span className="song-duration">({cancion.seconds} s)</span>
          </p>
        ))}
    </div>
  );
};

export default SongsList;
