import React, { useState } from "react";
import { ContenedorContenedor, Accion, Boton, Label, Input } from './componentes';

function Laboratorio({ estadoSesion }) {
  const [saldo, estadoSaldo] = useState(1900);
  const [deposito, estadoDeposito] = useState(false);
  const [retiro, estadoRetiro] = useState(false);
  const [informacion, estadoInformacion] = useState(false);
  const [cantidadDeposito, estadoCantidadDeposito] = useState('');
  const [cantidadRetiro, estadoCantidadRetiro] = useState('');

  function logica(evento) {
    switch (evento.target.name) {
      case 'deposito':
        estadoCantidadDeposito(evento.target.value);
        break;
      case 'retiro':
        estadoCantidadRetiro(evento.target.value);
        break;
      default:
        console.log('error');
        break;
    }
  }

  function realizarDeposito() {
    const nuevoSaldo = saldo + parseFloat(cantidadDeposito);
    estadoSaldo(nuevoSaldo);
    estadoDeposito(false);
  };

  function realizarRetiro() {
    const nuevoSaldo = saldo - parseFloat(cantidadRetiro);
    estadoSaldo(nuevoSaldo);
    estadoRetiro(false);
  };

  function DepositoTrue() {
    return (
      <form>
        <Boton onClick={() => estadoDeposito(false)}>regresar</Boton>
        <Label style={{ marginTop: '60px' }}>
          Ingrese la cantidad a depositar
        </Label>
        <Input
          name="deposito"
          placeholder="$ cantidad"
          type="number"
          required
          value={cantidadDeposito}
          onChange={logica}
        />
        <Boton onClick={realizarDeposito}>Realizar depósito</Boton>
      </form>
    );
  }

  function RetiroTrue() {
    return (
      <form>
        <Boton onClick={() => estadoRetiro(false)}>regresar</Boton>
        <Label style={{ marginTop: '60px' }}>
          Ingrese la cantidad a retirar
        </Label>
        <Input
          name="retiro"
          placeholder="$ cantidad"
          type="number"
          required
          value={cantidadRetiro}
          onChange={logica}
        />
        <Boton onClick={realizarRetiro}>Realizar retiro</Boton>
      </form>
    );
  }

  function InformacionTrue() {
    return (
      <div>
        <Boton onClick={() => estadoInformacion(false)}>regresar</Boton>
        <div style={{ marginTop: '60px' }}>
          <p>name: kevin</p>
          <p>password: kevin23</p>
          <p>id: 123</p>
          <p>gmail: kevin@gmail.com</p>
          <p>telefono: 6692894376</p>
          <p>saldo actual: ${saldo}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {deposito === false && retiro === false && informacion === false ?
        <div>
          <div>
            <h1>bienbenido a banco bienestar azteca</h1>
            <h2>seleccione la accion a realizar</h2>
          </div>
          <ContenedorContenedor>
            <Accion onClick={() => estadoDeposito(true)}>Deposito</Accion>
            <Accion onClick={() => estadoRetiro(true)}>Retiro</Accion>
            <Accion onClick={() => estadoInformacion(true)}>Datos</Accion>
          </ContenedorContenedor>
          <Boton style={{ marginTop: '80px' }} onClick={() => estadoSesion(false)}>cerrar sesión</Boton>
        </div>
        :
        deposito === true ?
          <DepositoTrue />
          :
          retiro === true ?
            <RetiroTrue />
            :
            informacion === true ?
              <InformacionTrue />
              :
              console.log('error')
      }
    </div>
  );
}

export default Laboratorio;