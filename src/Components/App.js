// Create React component then performs a fetch ...

import React, { useState, useEffect } from 'react';
import './App.css';
import { postRequest } from '../api/postRequest';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(message);
    const postMessage = await postRequest(message);
    console.log(postMessage);
    setResponse(postMessage);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      <div>{response}</div>
    </div>
  );
}

export default App;
