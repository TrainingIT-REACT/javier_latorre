import React, { Component } from 'react';

// Css
import './Albums.css';

const Albums = (props) => {
  
  return (
    <>
    <h1>Albums</h1>
    { <ul>
        {props.recomendadosList.map(album => <li key={album.id}>{album.name}</li>)}
      </ul>
    }
    </>
  );
}

export default Albums;
