import React from "react";
import { Link } from "react-router-dom";

// Css
import "./Album.css";

const Album = ({ name, id, artist, cover }) => {
  return (
    <div className="Album">
      <h2 className="album-title">{name}</h2>
      <p className="album-artist">{artist}</p>
      <img src={cover} alt="cover" />
    </div>
  );
};

export default Album;
