import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import dataApp from "./data/data.js"
const root = ReactDOM.createRoot(document.getElementById('root'));

export const data = React.createContext()

root.render(
  <React.StrictMode>
    <data.Provider value={dataApp}>
      <App />
    </data.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
