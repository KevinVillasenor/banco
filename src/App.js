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