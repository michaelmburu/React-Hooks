import React, {useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


// Creating controlled components with useState() 
function App() {
      const [sound, setSound] = useState("")
      const [color, setColor] = useState("#000000")
     
      const submit = (e) => {
        e.preventDefault();
        alert(`${sound} sounds like ${color} `)
        setSound("")
        setColor("#000000")
      }
      return (
        <form onSubmit={submit}>
          <input type="text" value={sound} placeholder="Sound...." onChange={(e) => setSound(e.target.value)} />
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
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
