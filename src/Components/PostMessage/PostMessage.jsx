import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './PostMessage.scss';
import {
  replyFromChat,
  questionToChat,
} from '../../redux/selectors/chatWithAi.selector';

const PostMessage = ({ questionMessage, question }) => {
  //   if (!question) return null;
  //   console.log(question);
  return (
    <div className="d-flex justify-content-end mb-5 msg-post">
      <div className="msg-post__content">
        {question}
        <span className="msg-post__time">8:55 AM, Today</span>
      </div>
      <div className="user__img-cont">
        <img
          src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image-HD.png"
          className="rounded-circle user__img"
        />
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    //   replyMessage: replyFromChat(state),
    questionMessage: questionToChat(state),
    //   isMessage: isPostMessage(state),
  };
};
// const mapDispatch = {
//   postMessage: postOpenAiDispatch,
// };

export default connect(mapState, null)(PostMessage);
