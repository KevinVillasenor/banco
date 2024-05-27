import React, {useState} from "react";
import Formulario from "./formularios";
import Contador from "./contador";
import Calculadora from "./calculadora";
import SesionIniciada from './sesion-iniciada'
import { Contenedor } from "./componentes";

const JSX = () =>{
    const [sesion, cambiarEstadoSesion] = useState(true);
    return (
        <Contenedor>
            {sesion === true ? 
                <div>
                    <SesionIniciada cambiarEstadoSesion={cambiarEstadoSesion}/>
                </div>
                 :
                <div>
                    <Formulario cambiarEstadoSesion={cambiarEstadoSesion}/>
                </div>
            }
            <div>
            </div>
        </Contenedor>
    );
};

export default JSX;