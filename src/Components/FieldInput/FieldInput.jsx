import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './FieldInput.scss';
import { openAiDispatch } from '../../redux/middleware/postChatThunk';
import { replyFromChat } from '../../redux/selectors/chatWithAi.selector';

const FieldInput = ({ postMessage, replyMessage, canEnterMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (message === '' || !canEnterMessage) return;
    postMessage(message);
    setMessage('');
  };

  const handleChange = e => {
    e.preventDefault();
    const value = e.target.value;
    setMessage(value);
  };

  const adjuctTextareaHeight = e => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  const minTextereaHeight = e => {
    const form = e.target;
    const textarea = form.querySelector('textarea');
    textarea.style.height = '3.24rem';
  };

  const classBtn = canEnterMessage
    ? 'btn field-input__btn-submit'
    : 'btn field-input__btn-submit field-input__btn-submit_active';

  return (
    <div className="field-input mb-3 ">
      <form
        onSubmit={e => {
          handleSubmit(e);
          minTextereaHeight(e);
        }}
      >
        <div className="field-input__form-box d-flex justify-content-end">
          <div className="field-input__textarea ">
            <textarea
              value={message}
              onChange={handleChange}
              className="me-1  py-2  px-3 form-control"
              onInput={adjuctTextareaHeight}
              rows="1"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="field-input__submit">
            <button className={classBtn} type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapState = state => {
  return {
    canEnterMessage: state.chatWithAi.canEnterMessage,
  };
};
const mapDispatch = {
  postMessage: openAiDispatch,
};

export default connect(mapState, mapDispatch)(FieldInput);

{
  /* <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem voluptates id impedit facere, fugit assumenda neque maxime repellat nesciunt asperiores rerum minus, itaque accusamus porro error distinctio accusantium possimus natus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ea veritatis perspiciatis ab assumenda voluptatibus ex vero ullam temporibus, ratione laboriosam, ipsam tempora soluta, exercitationem sequi rerum culpa quisquam nisi.
          </p> */
}
