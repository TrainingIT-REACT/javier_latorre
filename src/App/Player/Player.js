import ReactDOM from "react-dom";
import React from "react";

import "./Player.css";

// Obtenemos la referencia del nodo usando getElementByID
const playerNode = document.getElementById("player");

class Player extends React.Component {
  constructor(props) {
    super(props);

    // Para tener más control sobre qué se muestra, vamos
    // a crear un nuevo DIV que incluir que será la raíz del
    // contenido
    this.el = document.createElement("div");
    // Agregamos un par de clases por defecto
    this.el.classList.add("player");
    this.el.classList.add("hidden");
  }

  // Agregamos el nodo que hemos creado como descendiente de #player
  componentDidMount() {
    playerNode.appendChild(this.el);
  }

  // Cuando no haga falta el componente, borramos el nodo que hemos
  // creado
  componentWillUnmount() {
    playerNode.removeChild(this.el);
  }

  render() {
    // Si la propiedad open es false, no mostramos nada y
    // agregamos la clase hidden al nodo que hemos creado
    if (this.props.open !== true) {
      this.el.classList.add("hidden");
      return null;
    }

    // Eliminamos la propiedad hidden y mostramos el contenido
    this.el.classList.remove("hidden");
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Player;
