import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './FieldInput.scss';
import { postOpenAiDispatch } from '../../redux/middleware/postChatThunk';
import { replyFromChat } from '../../redux/selectors/chatWithAi.selector';

const FieldInput = ({ postMessage, replyMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (message === '') return;
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
    textarea.style.height = '4.38rem';
  };

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
              className="me-1  p-3 form-control"
              onInput={adjuctTextareaHeight}
              rows="1"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="field-input__submit">
            <button className="btn btn-warning btn-submit" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

// const mapState = state => {
//   return {
//     replyMessage: replyFromChat(state),
//   };
// };
const mapDispatch = {
  postMessage: postOpenAiDispatch,
};

export default connect(null, mapDispatch)(FieldInput);

{
  /* <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem voluptates id impedit facere, fugit assumenda neque maxime repellat nesciunt asperiores rerum minus, itaque accusamus porro error distinctio accusantium possimus natus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ea veritatis perspiciatis ab assumenda voluptatibus ex vero ullam temporibus, ratione laboriosam, ipsam tempora soluta, exercitationem sequi rerum culpa quisquam nisi.
          </p> */
}
