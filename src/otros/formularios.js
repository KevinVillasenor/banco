import React, {useState, useEffect} from "react";
import './formulario.css';
// import styled from 'styled-components';
import { Boton, Input, Form, Label} from "./componentes";

const Formulario = (props) => {
  // funciones para crear estados en los input
  const [usuario, cambiarUsuario] = useState('');
  const [password, cambiarPassword] = useState('');
  const [surname, cambiarSurname] = useState('');
  const [id, cambiarId] = useState('');
  const [mail, cambiarMail] = useState('');

  // esta funcion ejecuta codigo cada que el componente haga un render
  useEffect(() => {console.log('el componente Formulario se renderizo')});

  // se ejecuta solamente al cuando cambia el estado de la dependencia = [dependencias]
  useEffect(() => {console.log('el estado Usuario se renderizo')}, [usuario, password]);
  
  // funcion para cambiar el estado de los input
  const universal = (evento) =>{
    if (evento.target.name === 'usuario') {
      cambiarUsuario(evento.target.value);

    } else if(evento.target.name === 'surname'){
      cambiarSurname(evento.target.value);

    } else if(evento.target.name === 'id'){
      cambiarId(evento.target.value);

    } else if(evento.target.name === 'password'){
      cambiarPassword(evento.target.value);

    } else if(evento.target.name === 'mail'){
      cambiarMail(evento.target.value);
    }
  };

  // validacion de datos de usuario
  const valided = (evento) =>{
    if (usuario === 'kevin' && password === 'kevin23' && surname === 'villaseñor' && id === '123' && mail === 'kevin@gmail.com') {
      props.cambiarEstadoSesion(true);
    } else { 
      alert('datos incorrectos');
      evento.preventDefault();
      cambiarUsuario('');
      cambiarPassword('');
      cambiarSurname('');
      cambiarId('');
      cambiarMail('')
    }
  };

  return (
    <div>
      <Form action=""  onSubmit={valided}>
      <h1>no has iniciado sesion</h1>
        <div>
          <Label htmlFor="usuario">Usuario: 🙎🏾‍♂️</Label>
          <Input 
            type="text" 
            name="usuario" 
            id="usuario" 
            placeholder="usuario" 
            required
            value={usuario}
            onChange={universal}
             />
        </div>
        <div>
          <Label htmlFor="password">Contraseña: 🔒</Label>
          <Input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="password" 
            required
            value={password}
            onChange={universal}
          />
        </div>
        <div>
          <Label htmlFor="surname">surname: 📘</Label>
          <Input 
            type="text"
            name="surname"
            id="surname"
            placeholder="surname"
            required
            value={surname}
            onChange={universal}
          />
        </div>
        <div>
          <Label htmlFor="id">id: 🎲</Label>
          <Input 
            name="id"
            type="text"
            id="id"
            placeholder="id"
            required
            value={id}
            onChange={universal}
          />
        </div>
        <div>
          <Label htmlFor="mail">gmail: 📧</Label>
          <Input 
            name="mail"
            type="mail"
            id="mail"
            placeholder="gmail"
            required
            value={mail}
            onChange={universal}
          />
        </div>
          <Boton>iniciar sesion</Boton>
      </Form>
    </div>
  );
};

export default Formulario;
