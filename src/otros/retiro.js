import React, {useState} from "react";
import {Label, Input} from './componentes';

const Retiro = ({retiro}) =>{
  return (
    <div>
        <label>
          Ingrese la cantidad a retirar
        </label>
        <input 
          name="retiro"
          placeholder="cantidad"
          type="number"
          required
        />
    </div>
  );
};

export default Retiro;