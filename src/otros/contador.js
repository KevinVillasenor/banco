import React, {useState, useReducer} from "react";
import { Operador } from "./componentes";

const Contador = ({positivo, negativo, dividir, multiplicar}) =>{
    const [contador, estadoContador] = useState(0);

    const Operaciones = (polo) =>{
        switch (polo) {
            case 'mas':
                estadoContador(contador + positivo);
                break;
            case 'menos' :
                estadoContador(contador - negativo);
                break;
            case 'dividir' :
                estadoContador(contador / dividir);
                break;
            case 'multiplicar' :
                estadoContador(contador * multiplicar);
                break;
            case 'reiniciar' :
                estadoContador(0);
            default:
                console.log('error');
                break;
        }
    };

    return (
        <div style={{marginTop: "100px"}}>
            <h1>contador: {contador}</h1>
            <Operador onClick={() => Operaciones('mas')}>+ {positivo}</Operador>
            <Operador onClick={() => Operaciones('menos')}>- {negativo}</Operador>
            <Operador onClick={() => Operaciones('dividir')}>/ {dividir}</Operador>
            <Operador onClick={() => Operaciones('multiplicar')}>* {multiplicar}</Operador>
            <Operador onClick={() => Operaciones('reiniciar')}>C</Operador>
        </div>
    )
};

export default Contador 