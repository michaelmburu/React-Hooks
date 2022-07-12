import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Using useEffect, runs after every component render and change
function App() {
  const [name, setName] = useState("Mburu");

  // This fires everytime we change the component state, call useState()
  // Passing in array means effect only fires once on first render
  useEffect(() => {
    document.title = `Celebrate ${name}`;
  }, [name])

  return (
    <section>
     <p>Congratulations {name}</p>
     <button onClick={() => setName("Michael")}>Change Winner</button>
    </section>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
