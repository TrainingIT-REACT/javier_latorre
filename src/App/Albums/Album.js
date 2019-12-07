import React from "react";
import { Link } from "react-router-dom";
import { ALBUMS } from "../constants";

// Css
import "./Album.css";

const Album = ({ name, id, artist, cover }) => {
  return (
    <Link className="Album" to={`${ALBUMS}/${id}`}>
      <h2 className="album-title">{name}</h2>
      <p className="album-artist">{artist}</p>
      <img src={cover} alt="album cover" />
    </Link>
  );
};

export default Album;
