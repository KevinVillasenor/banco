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