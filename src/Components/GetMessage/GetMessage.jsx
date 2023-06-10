import React from 'react';
import './GetMessage.scss';
import Loading from '../Loading/Loading';
import avatarAi from '../../images/avatar-ai.png';

const GetMessage = ({ reply, time }) => {
  return (
    <div className="d-flex justify-content-start mb-5 msg-get">
      <div className="user__img-cont">
        <img src={avatarAi} className="rounded-circle user__img" />
      </div>
      <div className="msg-get__content">
        {reply ? reply : <Loading />}

        <span className="msg-get__time">{time}</span>
      </div>
    </div>
  );
};

export default GetMessage;
