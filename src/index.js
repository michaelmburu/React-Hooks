import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Using useReducer
function App() {
    const [number, setNumber] = useReducer((number, newNumber) => number + newNumber , 0)
    return (
      <h1 onClick={() => setNumber(1)}>{number}</h1>
    )
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
