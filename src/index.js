import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BudgetsContextProvider } from './contexts/BudgetsContext';

ReactDOM.render(
  <React.StrictMode>
    <BudgetsContextProvider>
      <App />
    </BudgetsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

