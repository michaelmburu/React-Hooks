import React, {useRef } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


// Using useRef to get values from components
function App() {
      const sound = useRef();
      const color = useRef();

      const submit = (e) => {
        e.preventDefault();
        const soundVal = sound.current.value;
        const colorVal = color.current.value;
        alert(`${soundVal} sounds like${colorVal} `)
        sound.current.value = "";
        color.current.value= "";
      }
      return (
        <form onSubmit={submit}>
          <input type="text" ref={sound} placeholder="Sound...." />
          <input type="color" ref={color} />
          <button>Add</button>
        </form>
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
