/*
  This file cointains the initialization of our web app.
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './variables.css';
import './global.css';
import Router from './routes';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
