import React, { useState } from "react";
import { Numero, Div } from "./componentes";

const Calculadora = () => {
  const [input, setInput] = useState("");
  const [resultado, setResultado] = useState("");

  const agregarDigito = (digito) => {
    setInput((prevInput) => prevInput + digito);
  };

  const agregarOperador = (operador) => {
    setInput((prevInput) => (prevInput === "" ? "" : prevInput + operador));
  };

  const borrarUltimoDigito = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const limpiarPantalla = () => {
    setInput("");
    setResultado("");
  };

  const calcularResultado = () => {
    try {
      setResultado(eval(input));
    } catch (error) {
      setResultado("Error");
    }
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <Div>
        {input === "" ? "0" : input}
      </Div>
      <Div>
        {resultado}
      </Div>
      <Numero onClick={() => agregarDigito("9")}>9</Numero>
      <Numero onClick={() => agregarDigito("8")}>8</Numero>
      <Numero onClick={() => agregarDigito("7")}>7</Numero>
      <Numero onClick={() => agregarDigito("6")}>6</Numero>
      <Numero onClick={() => agregarDigito("5")}>5</Numero>
      <Numero onClick={() => agregarDigito("4")}>4</Numero>
      <Numero onClick={() => agregarDigito("3")}>3</Numero>
      <Numero onClick={() => agregarDigito("2")}>2</Numero>
      <Numero onClick={() => agregarDigito("1")}>1</Numero>
      <Numero onClick={() => agregarDigito("0")}>0</Numero>
      <Numero onClick={() => agregarOperador("+")}>+</Numero>
      <Numero onClick={() => agregarOperador("-")}>-</Numero>
      <Numero onClick={() => agregarOperador("*")}>*</Numero>
      <Numero onClick={() => agregarOperador("/")}>/</Numero>
      <Numero onClick={calcularResultado}>=</Numero>
      <Numero onClick={borrarUltimoDigito}>←</Numero>
      <Numero onClick={limpiarPantalla}>C</Numero>
    </div>
  );
};

export default Calculadora;