import React, { useState, useEffect } from 'react';
import './Chat.scss';
import FieldInput from '../../Components/FieldInput/FieldInput';
import FieldСorrespondence from '../../Components/FieldСorrespondence/FieldСorrespondence';

const Chat = () => {
  return (
    <div className="chat row align-items-end">
      <div className="chat__main col">
        <FieldСorrespondence />
        <FieldInput />
      </div>
    </div>
  );
};

export default Chat;
