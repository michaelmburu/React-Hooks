import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {FaStar} from "react-icons/fa";
import reportWebVitals from './reportWebVitals';

// Star rating system
const createArray = (length) => [
  ...Array(length)
];

function Star({selected = false, onSelect}) {
  return (
    <FaStar color={selected ? "red" : "gray"} onClick={onSelect}/>
  )
}

function StarRating({totalStars = 5}) {
  const [selectedStars, setSelectedStars] = useState(0)
  return (
    <>
    {
      createArray(totalStars).map((n, i) => (<Star key={i}  selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)}/>))};
      <p>{selectedStars} of {totalStars}</p>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StarRating  totalStars={4}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
