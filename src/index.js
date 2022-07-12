import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Using createContext provider hook
export const TreesContext = createContext();

// load data
const trees = [
  {id: "1", type:"Nandi Flame"},
  {id: "2", type:"Blue Gum"},
  {id: "3", type:"Cedar"},
  {id: "4", type:"Pine"}
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Wrap provider & pass down the data to the wrapped component
  <TreesContext.Provider value={{trees}}>
    <App />
  </TreesContext.Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
