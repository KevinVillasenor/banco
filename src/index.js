<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
=======
// Importaciones necesarias
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

// importacion de los componenter JSX
import  JSX  from "../src/otros/datos";

// Punto de montaje en el DOM
const root = document.getElementById('root');

// Renderizar la aplicación dentro del punto de montaje
 
 ReactDOM.render(<JSX />, root);
// createRoot(document.getElementById('root')).render(<JSXcomponentes />);
// Reportar las métricas web
reportWebVitals();
>>>>>>> 505de011fd7e52885b283675c5da5d928acf9951
