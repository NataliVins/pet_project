import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [dogName, setDogName] = useState('');

  const handleInputChange = (event) => {
    setDogName(event.target.value);
  };

  const sendData = () => {
    fetch('http://localhost:8000', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ key: 'value' }),
}).then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>dog breed</h1>
        <div className="photo-cell">
          <img src="media/doberman.jpg" alt="Dog Photo" />
          <div className="button-container">
            <button className="button">Add info</button>
            <button className="button">Delete</button>
          </div>
        </div>
        <div>
          <h1>Input your dog name:</h1>
          <input type="text" value={dogName} onChange={handleInputChange} name="dogname" />
          <button onClick={sendData}>Send</button>
        </div>
      </header>
    </div>
  );
}

export default App;
