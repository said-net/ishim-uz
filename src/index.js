import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './main';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import manager from './managers/manager';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={manager}>
        <Main />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
