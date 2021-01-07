import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SettingsProvider } from './contexts/SettingsContext'

ReactDOM.render(
  <React.StrictMode>
    <SettingsProvider>
    <App />
    </SettingsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

