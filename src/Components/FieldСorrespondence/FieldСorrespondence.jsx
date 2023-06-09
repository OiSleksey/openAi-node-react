import React, { useState, useEffect, createRef } from 'react';
import { connect } from 'react-redux';
import './FieldСorrespondence.scss';
import {
  replyFromChat,
  isPostMessage,
  arrPostGetMessage,
} from '../../redux/selectors/chatWithAi.selector';
import PostMessage from '../PostMessage/PostMessage';
import GetMessage from '../GetMessage/GetMessage';

const FieldСorrespondence = ({ isMessage, arrMesseges }) => {
  const myRef = createRef();
  const getScrollHeightBody = element => {
    const scrollHeight = element.current.scrollHeight;
    return scrollHeight;
  };

  const scrollToPosition = () => {
    const scrollHeight = getScrollHeightBody(myRef);
    myRef.current.scrollTop = scrollHeight;
  };
  useEffect(() => {
    scrollToPosition();
  }, [arrMesseges]);

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

  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <div className="field-coresspodence mb-3">
      <div
        ref={myRef}
        onClick={scrollToPosition}
        className="field-coresspodence__body msg-cotainer"
        style={styleBody}
      >
        {items}
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

// import React, { useState, useRef } from 'react';

// const MyComponent = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const myRef = useRef();

//   const handleScroll = () => {
//     setScrollPosition(myRef.current.scrollTop);
//   };

//   const smoothScrollTo = (position, duration) => {
//     const startTime = performance.now();
//     const startPosition = myRef.current.scrollTop;
//     const distance = position - startPosition;

//     const scrollStep = (timestamp) => {
//       const currentTime = timestamp - startTime;
//       const easing = easeOutQuad(currentTime / duration);
//       const scrollToPosition = startPosition + distance * easing;

//       myRef.current.scrollTop = scrollToPosition;

//       if (currentTime < duration) {
//         requestAnimationFrame(scrollStep);
//       } else {
//         setScrollPosition(position);
//       }
//     };

//     requestAnimationFrame(scrollStep);
//   };

//   const easeOutQuad = (t) => {
//     return t * (2 - t);
//   };

//   const scrollToPosition = (position) => {
//     smoothScrollTo(position, 500); // 500 мс - тривалість плавної прокрутки
//   };

//   return (
//     <div ref={myRef} style={{ overflow: 'auto', height: '300px' }} onScroll={handleScroll}>
//       <p>Зміст елемента</p>
//       <button onClick={() => scrollToPosition(200)}>Прокрутити до 200</button>
//       <button onClick={() => scrollToPosition(100)}>Прокрутити до 100</button>
//       <p>Поточна позиція: {scrollPosition}</p>
//     </div>
//   );
// };

// export default MyComponent;
