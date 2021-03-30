import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as ReactRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import 'modern-normalize/modern-normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <ReactRouter basename={process.env.PUBLIC_URL}>
      <App />
    </ReactRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
