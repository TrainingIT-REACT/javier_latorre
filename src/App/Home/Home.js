import React from 'react';

// Css
import './Home.css';

const Home = (props) => {
  
  return (
    <>
      <h1>Inicio. Lista recomendada</h1>
      { <ul>
          {props.recomendadosList.map(album => <li key={album.id}>{album.name}</li>)}
        </ul>
      }
    </>
  );
}

export default Home;
