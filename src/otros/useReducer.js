import React, {useReducer} from "react";
import { Operador } from "./componentes";

// estado inicial 
const contadorInicial = {contador: 0};

// funcion-reducer
const reducer = (estado, accion) => {
  switch (accion.tipo) {
    case 'INCREMENTAR':
        return {contador: estado.contador + accion.sumar};
      break;
    case 'DISMINUIR' :
        return {contador: estado.contador - accion.restar};
      break;
    case 'REINICIAR' :
        return {contador: estado.contador = 0};
    default:
        return (
          <div>
            error
          </div>
        );
      break;
  };
};

const Reducer = () => {
  const [estado, dispatch] = useReducer(reducer, contadorInicial);
  console.log(estado);
  console.log(contadorInicial);
  return (
    <div>
      <h1>contador useReducer {estado.contador}</h1>
      <Operador onClick={() => dispatch({tipo: 'INCREMENTAR', sumar: 8})}>aumentar</Operador>
      <Operador onClick={() => dispatch({tipo: 'DISMINUIR', restar: 1})}>disminuir</Operador>
      <Operador onClick={() => dispatch({tipo: 'REINICIAR'})}>reiniciar</Operador>
    </div>
  )
};

export default Reducer;