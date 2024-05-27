import React from "react";

// constructor de usuarios
class Usuarios {
  constructor(name, password, id, gmail){
    this.name = name;
    this.password = password;
    this.id = id;
    this.gmail = gmail;
  };
  // mostrar la informacion del usuario
  Informacion(){
    console.log(`name: ${this.name}\nid: ${this.id}\ngmail: ${this.gmail}`);
  };
};

// constructor de bancos
class Banco extends Usuarios{
  super(name, password, id, gmail)
  constructor(saldo, banco){
    this.saldo = saldo;
    this.banco = banco;
  };
  Deposito(monto){
    this.saldo += monto;
    console.log(`cantidad a depositar: ${monto}\nsaldo actual: ${this.saldo}`);
  };
  Retiro(monto){
    this.saldo -= monto;
    console.log(`cantidad a retirar: ${monto}\nsaldo actual: ${this.saldo}`);
  };
};