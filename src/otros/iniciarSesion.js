import React, {useState} from "react";
import { Contenedor, Form, Boton, Input, Label } from "./componentes";

const IniciarSesion = ({estadoSesion}) =>{

  // creacion de estado de los input
  const [usuario, estadoUsuario] = useState('');
  const [password, estadoPassword] = useState('');
  const [id, estadoId] = useState('');
  const [gmail, estadoGmail] = useState('');
  const [telefono, estadoTelefono ] = useState('');

  // funcion para cambiar el estado de los input
  function estadoInput(evento) {
    switch (evento.target.name) {
      case 'name':
        estadoUsuario(evento.target.value);
        break;
      case 'password':
        estadoPassword(evento.target.value)
        break;
      case 'id':
        estadoId(evento.target.value);
        break;
      case 'gmail':
        estadoGmail(evento.target.value);
        break;
      case 'telefono':
        estadoTelefono(evento.target.value);
    };
  };

  // funcion para validar los datos de los usuario 
  function ValueDatos(evento) {
    (usuario == 'kevin' && password == 'kevin23' && id == '123' && gmail == 'kevin@gmail.com' && telefono == 6692894376 ?
      estadoSesion(true)
      :
      alert('datos incorrectos')
    );
  }

  return (
    <div>
      <Form action="">
        <h1>iniciar sesion</h1>
        <Label form="name">name: </Label>
        <Input
          name="name"
          id="name"
          placeholder="name"
          value={usuario}
          type="text"
          onChange={estadoInput}
        />

        <Label form="password">password: </Label>
        <Input
          name="password"
          id="password"
          placeholder="password"
          value={password}
          type="password"
          onChange={estadoInput}
        />

        <Label form="id">id: </Label>
        <Input
          name="id"
          id="id"
          placeholder="id"
          value={id}
          type="text"
          onChange={estadoInput}
        />

        <Label form="gmail">gmail: </Label>
        <Input
          name="gmail"
          id="gmail"
          placeholder="gmail"
          value={gmail}
          type="mail"
          onChange={estadoInput}
        />

        <Label form="telefono">telefono: </Label>
        <Input
          name="telefono"
          id="telefono"
          placeholder="telefono"
          value={telefono}
          type="number"
          onChange={estadoInput}
        />
        <Boton onClick={ValueDatos}>iniciar sesion</Boton>
      </Form>
    </div>
  );
};

export default IniciarSesion;