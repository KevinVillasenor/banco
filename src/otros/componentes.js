import React from "react";
import styled from 'styled-components';

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
    border:solid black 1px;
  
  &:hover {
    color: white;
    background-color: #333;
    -webkit-box-shadow: -1px -2px 26px 0px rgba(0,0,0,0.8);
    -moz-box-shadow: -1px -2px 26px 0px rgba(0,0,0,0.8);
    box-shadow: -1px -2px 26px 0px rgba(0,0,0,0.8);
  }
  `;

  const Form = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;
  margin: 20px 0 0 0;
  `;

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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
  border-radius: 2px;
  box-shadow: 0 0 50px rgba(0,0,0,.1);
  `;

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