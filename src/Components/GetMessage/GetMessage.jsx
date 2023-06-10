import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './GetMessage.scss';
// import { replyFromChat } from '../../redux/selectors/chatWithAi.selector';

const GetMessage = ({ replyMessage, reply, time }) => {
  // if (!reply) return null;
  // console.log(reply);
  return (
    <div className="d-flex justify-content-start mb-5 msg-get">
      <div className="user__img-cont">
        <img
          src="https://storage.somehow.com/o%2Fpage%252Fopenai%252Favatar%3Falt%3Dmedia%26token%3D4a9c8041-6e60-4f29-a55b-2c209b76aceb"
          className="rounded-circle user__img"
        />
      </div>
      <div className="msg-get__content">
        {reply ? reply : 'Loading...'}
        <span className="msg-get__time">{time}</span>
      </div>
    </div>
  );
};

export default GetMessage;
