import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Using useEffect, github api
function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, [])

  function loadData() {
    fetch(`https:api.github.com/users`)
    .then(res => res.json())
    .then(setData)
  }
    
      return (
        data &&
        <section>
          <p>Github API</p>
        
            <ul>
              {data.map(user => (
                <li key={user.id}>{user.login}</li>
              ))}
            </ul>
            <button onClick={() => setData([])}>Remove Data</button>
            <p></p>
            <button onClick={() => loadData()}>Add Data</button>
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
