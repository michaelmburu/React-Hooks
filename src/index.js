import React, {useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const initialState = {
  message: "Hi"
};

function reducer(state, action) {
  switch(action.type) {
    case "yell":
      return {
        message: `HEY! I just said ${state.message}`
      };
    case "whisper":
      return {
        message: `excuse me`
      };
    default: 
  }
}

// Using useReducer for complex state
function App() {
    const [state, dispatch] = useReducer(
      reducer,
      initialState
    )
      return (
        <>
         <p>Message : {state.message}</p>
         <button onClick={() => dispatch({type: "yell"})}>YELL</button>
         <button onClick={() => dispatch({type: "whisper"})}>Whisper</button>
        </>
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
