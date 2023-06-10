import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './PostMessage.scss';
import // replyFromChat,
// questionToChat,
'../../redux/selectors/chatWithAi.selector';

const PostMessage = ({ questionMessage, question, time }) => {
  //   if (!question) return null;
  //   console.log(question);
  return (
    <div className="d-flex justify-content-end mb-5 msg-post">
      <div className="msg-post__content">
        {question ? question : 'Loading...'}
        <span className="msg-post__time">{time}</span>
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
    // questionMessage: questionToChat(state),
    //   isMessage: isPostMessage(state),
  };
};
// const mapDispatch = {
//   postMessage: postOpenAiDispatch,
// };

export default connect(mapState, null)(PostMessage);

// 18:55, Today;
// 18:55, Yesterday;
// 18:55, 03.05.2022;
