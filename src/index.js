import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { useInput } from './useInput';


// Creating custom hooks with state and destructuring them on your input controls
function App() {
      const [titleProps, resetTitle] = useInput("");
      const [colorProps, resetColor] = useInput("#000000")
     
      const submit = (e) => {
        e.preventDefault()
        alert(`${titleProps.value} sounds like ${colorProps.value}`)
        resetTitle();
        resetColor();
      }
      return (
        <form onSubmit={submit}>
          <input type="text" {...titleProps} placeholder="Sound...." />
          <input type="color" {...colorProps} />
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
