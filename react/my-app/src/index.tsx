import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './App';
import AppFunction from './AppFunction';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Hello name="Aspire"  default_exclamation={2}/> */}
    <AppFunction/>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
