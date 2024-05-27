// import React, {useState} from "react";
// import {ContenedorContenedor, Accion, Boton} from './componentes';
// import Acciones from './acciones';
// import {Label, Input} from './componentes';

// const SesionIniciada = ({estadoSesion}) => {
     
//      // estado del saldo
//      const [saldo, estadoSaldo] = useState(100);
//      // estado de las secciones de las acciones
//      const [deposito, estadoDeposito] = useState(false);
//      const [retiro, estadoRetiro] = useState(false);
//      const [informacion, estadoInformacion] = useState(false);
//      // estado de los input 
//      const [cantidadDeposito, estadoCantidadDeposito] = useState('');
//      const [cantidadRetiro, estadoCantidadRetiro] = useState('');

//   return (
//     <div>
//         <div>
//           <div>
//             <h1>bienbenido a banco bienestar azteca</h1>
//             <h2>seleccione la accion a realisar</h2>
//           </div>
//           <ContenedorContenedor>
//             <Accion>Deposito</Accion>
//             <Accion>Retiro</Accion>
//             <Accion>Datos</Accion>
//           </ContenedorContenedor>
//           <Boton style={{marginTop:'80px'}} onClick={() => estadoSesion(false)}>serrar sesion</Boton>
//         </div>
        
//         {
//           (
//             deposito === true ?
//               function deposito() {
//                 return (
//                   <div>
//                     <Label>
//                       Ingrese la cantidad a depositar
//                     </Label>
//                     <Input 
//                       name="deposito"
//                       placeholder="cantidad"
//                       type="number"
//                       required
//                       value={cantidadDeposito}
//                     />
//                   </div>
//                 );
//               }
//               :
//             retiro === true ?
//               function deposito() {
//                 return (
//                   <div>
//                       <Label>
//                         Ingrese la cantidad a retirar
//                       </Label>
//                       <Input 
//                         name="retiro"
//                         placeholder="cantidad"
//                         type="number"
//                         required
//                       />
//                   </div>
//                 )  
//               }
//               :
//             informacion === true ?
//               function informacion() {
//                 return (
//                   <div>
//                     <p>name: kevin</p>
//                     <p>password: kevin23</p>
//                     <p>id: 123</p>
//                     <p>gmail: kevin@gmail.com</p>
//                     <p>telefono: 6692894376</p>
//                     <p>saldo actual: {saldo}</p>
//                   </div>
//                 );
//               }
//               :
//               console.log('')
              
//           )
//         }
//     </div>
//   );
// };

// export default SesionIniciada;