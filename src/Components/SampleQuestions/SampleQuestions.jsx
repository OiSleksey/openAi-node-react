import React from 'react';
import './SampleQuestions.scss';
import { inputHeight } from '../../redux/actions/heightComponents.actions';
import { connect } from 'react-redux';
import { openAiDispatch } from '../../redux/middleware/postChatThunk';

const SampleQuestions = ({ canEnterMessage, postMessage }) => {
  const handleClick = e => {
    e.preventDefault();
    if (!canEnterMessage) return;
    const message = e.target.textContent;
    postMessage(message);
    console.log(message);

    // const trimMessage = message.trim();
    // if (trimMessage === '' || !canEnterMessage) return;
    // minTextereaHeight(e);
    // postMessage(trimMessage);
    // setMessage('');
  };

  return (
    <div className="sample-qiestion">
      <ul className="sample-qiestion__list">
        <li className="sample-qiestion__item" onClick={handleClick}>
          Question 1
        </li>
        <li className="sample-qiestion__item" onClick={handleClick}>
          Question 2
        </li>
        <li className="sample-qiestion__item" onClick={handleClick}>
          Question 3
        </li>
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    canEnterMessage: state.chatWithAi.canEnterMessage,
  };
};
const mapDispatch = {
  getInputHeight: inputHeight,
  postMessage: openAiDispatch,
};

export default connect(mapState, mapDispatch)(SampleQuestions);
