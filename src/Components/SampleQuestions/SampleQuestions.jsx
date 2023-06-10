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
  };

  return (
    <div className="sample-qiestion">
      <ul className="sample-qiestion__list">
        <li className="sample-qiestion__item" onClick={handleClick}>
          How to start running training?
        </li>
        <li className="sample-qiestion__item" onClick={handleClick}>
          What is cadence?
        </li>
        <li className="sample-qiestion__item" onClick={handleClick}>
          What warm-up should be done before running?
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
