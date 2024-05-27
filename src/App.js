<<<<<<< HEAD
// dependenciar del programa 'no modificar'
import React, {useState} from 'react';
import IniciaraSesion from './otros/iniciarSesion';
import { Contenedor, Boton, Principal } from "./otros/componentes";
import SesionIniciada from './otros/sesionIniciada';
import Acciones from './otros/acciones';
import Laboratorio from './otros/laboratorio';
// import { ValueDatos } from "./otros/iniciarSesion";

function App() {
  // creacion del estado de la sesion
  const [sesion, estadoSesion] = useState(false);

  // funciona para cambiar el estado de la sesion
  function CambiarSesion() {
    estadoSesion();
  };

  return (
    <Principal>
      <Contenedor>
        {sesion === true ? 
        <div>
          <Laboratorio estadoSesion={estadoSesion}/>
        </div>
        :
        <div>
          <IniciaraSesion estadoSesion={estadoSesion}/>
        </div>}
      </Contenedor>

    </Principal>
  );
};

export default App;
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 505de011fd7e52885b283675c5da5d928acf9951
