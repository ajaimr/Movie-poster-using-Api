// inputcomponent.js
import React from 'react';
import './inputcomponent.css'
function InputComponent({ setInputValue }) {
  function update(event) {
    setInputValue(event.target.value);
  }
  return (
    <div className='input_div'>
      <p>Enter the movie name</p>
      <input onChange={update} placeholder='Movie name'></input>
    </div>
  );
}

export default InputComponent;
