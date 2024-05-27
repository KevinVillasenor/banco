import React, {useState} from "react";
import {Label, Input} from './componentes';

const Deposito = ({deposito}) =>{

  // creacion del estado del input
  const [cantidadDeposito, estadoCantidadDeposito] = useState('');

  // funcion para el valor de los input
  function Valor(evento) {
    estadoCantidadDeposito(evento.target.value);
  };

  return (
    <div>
        <Label>
          Ingrese la cantidad a depositar
        </Label>
        <Input 
          name="deposito"
          placeholder="cantidad"
          type="number"
          required
          value={cantidadDeposito}
        />
    </div>
  );
};

export default Deposito