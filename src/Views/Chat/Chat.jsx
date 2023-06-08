import React, { useState, useEffect } from 'react';
import './Chat.scss';
import FieldInput from '../../Components/FieldInput/FieldInput';

const Chat = () => {
  return (
    <div className="chat row align-items-end">
      <div className="chat__main col">
        <FieldInput />
      </div>
    </div>
  );
};

export default Chat;
