import React from "react";
import style from 'styled-components';
import { Boton, Contenedor } from "./componentes";
import  Contador  from "./contador";
import Calculadora from "./calculadora";
import Reducer from "./useReducer";

const SesionIniciada = (props) =>{
    return (
      <div>
        <h1>has iniciado sesion correctamente</h1>
        <Boton onClick={() => props.cambiarEstadoSesion(false)}>serrar sesion</Boton>
        <Contador positivo={100} negativo={10} dividir={5} multiplicar={4}/>
        <Calculadora></Calculadora>
        <Reducer/>
      </ div>
    );
  };

export default SesionIniciada;