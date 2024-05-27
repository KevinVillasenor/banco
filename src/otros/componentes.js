<<<<<<< HEAD
import React from "react";
import styled from 'styled-components';
=======
import styled from 'styled-components';
import React from 'react';
>>>>>>> 505de011fd7e52885b283675c5da5d928acf9951

const Boton = styled.button`
  background: white;
  display: inline-block;
  padding: 20px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  cursor: pointer;
    transition: .2s ease all;
    width: 99%;
<<<<<<< HEAD
    border:solid black 1px;
=======
>>>>>>> 505de011fd7e52885b283675c5da5d928acf9951
  
  &:hover {
    color: white;
    background-color: #333;
    -webkit-box-shadow: -1px -2px 26px 0px rgba(0,0,0,0.8);
    -moz-box-shadow: -1px -2px 26px 0px rgba(0,0,0,0.8);
    box-shadow: -1px -2px 26px 0px rgba(0,0,0,0.8);
  }
  `;

<<<<<<< HEAD
=======
  const Div = styled.div`
  background: white;
  display: inline-block;
  padding: 20px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  
    transition: .2s ease all;
    width: 99%;
  
  }
  `;

  const Operador = styled.button`
  background: white;
  display: inline-block;
  padding: 20px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  cursor: pointer;
    transition: .2s ease all;
    width: 99%;
    margin: 2px;
  
  &:hover {
    color: white;
    background-color: #333;
    -webkit-box-shadow: -1px -2px 26px 0px rgba(0,0,0,0.8);
    -moz-box-shadow: -1px -2px 26px 0px rgba(0,0,0,0.8);
    box-shadow: -1px -2px 26px 0px rgba(0,0,0,0.8);
  }
  `;

  const Numero = styled.button`
  background: white;
  display: inline-block;
  padding: 20px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  cursor: pointer;
    transition: .2s ease all;
    width: 30%;
    margin: 2px;
  
  &:hover {
    color: white;
    background-color: #333;
    -webkit-box-shadow: -1px -2px 26px 0px rgba(0,0,0,0.8);
    -moz-box-shadow: -1px -2px 26px 0px rgba(0,0,0,0.8);
    box-shadow: -1px -2px 26px 0px rgba(0,0,0,0.8);
  }
  `;
  
  const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #d1d1d1;
  border-radius: 3px;
  
  &:hover {
    -webkit-box-shadow: -1px -2px 26px 0px rgba(0,0,0,0.8);
    -moz-box-shadow: -1px -2px 26px 0px rgba(0,0,0,0.8);
    box-shadow: -1px -2px 26px 0px rgba(0,0,0,0.8);
  }
  
  `;
  
>>>>>>> 505de011fd7e52885b283675c5da5d928acf9951
  const Form = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;
  margin: 20px 0 0 0;
  `;
<<<<<<< HEAD

=======
  
>>>>>>> 505de011fd7e52885b283675c5da5d928acf9951
  const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
  display: block; 
  margin-bottom: 5px;
  `;
  
  const Contenedor = styled.div`
  width: 90%;
  max-width: 500px;
  padding: 40px;
<<<<<<< HEAD
  display: flex;
  justify-content: center;
  align-items: center;
=======
>>>>>>> 505de011fd7e52885b283675c5da5d928acf9951
  margin: 40px;
  border-radius: 2px;
  box-shadow: 0 0 50px rgba(0,0,0,.1);
  `;
<<<<<<< HEAD

  const Principal = styled.div`
  width: 160vh;
  height: 100%;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left:50px;
  border-radius: 2px;
  `;

  const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #d1d1d1;
  border-radius: 3px;
  
  &:hover {
    -webkit-box-shadow: -1px 0px 24px -7px rgba(0,0,0,0.33);
    -moz-box-shadow: -1px 0px 24px -7px rgba(0,0,0,0.33);
    box-shadow: -1px 0px 24px -7px rgba(0,0,0,0.33);
  }
  
  `;

  const Accion = styled.div`
  width: 100%;
  padding: 10px;
  border: 2px solid #d1d1d1;
  border-radius: 3px;
  display:flex;
  justify-content: center;
  gap:10px;
  &:hover {
    -webkit-box-shadow: -1px 0px 24px -7px rgba(0,0,0,0.33);
-moz-box-shadow: -1px 0px 24px -7px rgba(0,0,0,0.33);
box-shadow: -1px 0px 24px -7px rgba(0,0,0,0.33);
  }
  
  `;

  const ContenedorContenedor = styled.div`
  display:flex;
  gap:20px;
  margin-top:50px;
  flex-direction:row;
  cursor: pointer;
  `;

  export {Boton, Form, Label, Contenedor, Principal, Input, Accion, ContenedorContenedor};
=======
  
  export {Boton, Input, Form, Label, Contenedor, Operador, Numero, Div};
>>>>>>> 505de011fd7e52885b283675c5da5d928acf9951
