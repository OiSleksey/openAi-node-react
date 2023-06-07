import React, { useState, useEffect } from 'react';
import './Chat.scss';
import { postRequest } from '../../api/postRequest';

const Chat = () => {
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
    <div className="chat row">
      <div className="chat__main col">
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <div>{response}</div>
      </div>
    </div>
  );
};

export default Chat;
