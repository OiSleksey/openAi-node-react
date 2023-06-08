import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './FieldСorrespondence.scss';
import {
  replyFromChat,
  isPostMessage,
  arrPostGetMessage,
} from '../../redux/selectors/chatWithAi.selector';
import PostMessage from '../PostMessage/PostMessage';
import GetMessage from '../GetMessage/GetMessage';

// const FieldСorrespondence = ({ replyMessage }) => {
//   //   const [message, setMessage] = useState('');

//   //   const adjuctTextareaHeight = e => {
//   //     const textarea = e.target;
//   //     textarea.style.height = 'auto';
//   //     textarea.style.height = textarea.scrollHeight + 'px';
//   //   };

//   return (
//     <div className="field-corespodence mb-3 ">
//       <div style={{ color: 'black' }}>{replyMessage}</div>
//     </div>
//   );
// };
const FieldСorrespondence = ({ isMessage, arrMesseges }) => {
  //   const [message, setMessage] = useState('');

  //   const adjuctTextareaHeight = e => {
  //     const textarea = e.target;
  //     textarea.style.height = 'auto';
  //     textarea.style.height = textarea.scrollHeight + 'px';
  //   };

  // $(document).ready(function(){
  //   $('#action_menu_btn').click(function(){
  //     $('.action_menu').toggle();
  //   });
  //     });
  const styleBody = arrMesseges ? { padding: '10px' } : { padding: '0' };
  const items = arrMesseges
    ? arrMesseges.map((element, index) => {
        return (
          <div key={index}>
            <PostMessage
              key={index}
              question={element[0] ? element[0] : null}
            />
            <GetMessage
              key={index + 1}
              reply={element[1] ? element[1] : null}
            />
          </div>
        );
      })
    : null;
  console.log(items);

  return (
    <div className="field-coresspodence mb-3">
      <div className="field-coresspodence__body msg-cotainer" style={styleBody}>
        {items}
        {/* <PostMessage question={'hello'} />
        <GetMessage reply={'response'} />
        <PostMessage question={'hello'} />
        <GetMessage reply={'response'} />
        <PostMessage question={'hello'} />
        <GetMessage reply={'response'} /> */}
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    // replyMessage: replyFromChat(state),
    isMessage: isPostMessage(state),
    arrMesseges: arrPostGetMessage(state),
  };
};
// const mapDispatch = {
//   postMessage: postOpenAiDispatch,
// };

export default connect(mapState, null)(FieldСorrespondence);

{
  /* <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem voluptates id impedit facere, fugit assumenda neque maxime repellat nesciunt asperiores rerum minus, itaque accusamus porro error distinctio accusantium possimus natus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ea veritatis perspiciatis ab assumenda voluptatibus ex vero ullam temporibus, ratione laboriosam, ipsam tempora soluta, exercitationem sequi rerum culpa quisquam nisi.
          </p> */
}

{
  /* <div className="d-flex justify-content-end mb-4">
          <div className="msg_cotainer_send">
            Hi Khalid i am good tnx how about you?
            <span className="msg_time_send">8:55 AM, Today</span>
          </div>
          <div className="img_cont_msg">
            <img
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image-HD.png"
              className="rounded-circle user_img_msg"
            />
          </div>
        </div>
        <div className="d-flex justify-content-start mb-4">
          <div className="img_cont_msg">
            <img
              src="https://storage.somehow.com/o%2Fpage%252Fopenai%252Favatar%3Falt%3Dmedia%26token%3D4a9c8041-6e60-4f29-a55b-2c209b76aceb"
              className="rounded-circle user_img_msg"
            />
          </div>
          <div className="msg_cotainer">
            I am good too, thank you for your chat template
            <span className="msg_time">9:00 AM, Today</span>
          </div>
        </div>
        <div className="d-flex justify-content-end mb-4">
          <div className="msg_cotainer_send">
            You are welcome
            <span className="msg_time_send">9:05 AM, Today</span>
          </div>
          <div className="img_cont_msg">
            <img
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image-HD.png"
              className="rounded-circle user_img_msg"
            />
          </div>
        </div>
        <div className="d-flex justify-content-start mb-4">
          <div className="img_cont_msg">
            <img
              src="https://storage.somehow.com/o%2Fpage%252Fopenai%252Favatar%3Falt%3Dmedia%26token%3D4a9c8041-6e60-4f29-a55b-2c209b76aceb"
              className="rounded-circle user_img_msg"
            />
          </div>
          <div className="msg_cotainer">
            I am looking for your next templates
            <span className="msg_time">9:07 AM, Today</span>
          </div>
        </div>
        <div className="d-flex justify-content-end mb-4">
          <div className="msg_cotainer_send">
            Ok, thank you have a good day
            <span className="msg_time_send">9:10 AM, Today</span>
          </div>
          <div className="img_cont_msg">
            <img
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image-HD.png"
              className="rounded-circle user_img_msg"
            />
          </div>
        </div>
        <div className="d-flex justify-content-start mb-4">
          <div className="img_cont_msg">
            <img
              src="https://storage.somehow.com/o%2Fpage%252Fopenai%252Favatar%3Falt%3Dmedia%26token%3D4a9c8041-6e60-4f29-a55b-2c209b76aceb"
              className="rounded-circle user_img_msg"
            />
          </div>
          <div className="msg_cotainer">
            Bye, see you
            <span className="msg_time">9:12 AM, Today</span>
          </div>
        </div> */
}
