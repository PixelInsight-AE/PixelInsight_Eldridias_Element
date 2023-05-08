import React from 'react';
import ReactDOM from 'react-dom/client';
import EldridiasElement from './EldridiasElement.jsx';
import { BrowserRouter } from 'react-router-dom';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <EldridiasElement />
    </BrowserRouter>
  </React.StrictMode>
);

// ? all clear
