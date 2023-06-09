import React, { useState, useEffect, createRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
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
  const scrollToBottom = () => {
    scroll.scrollToBottom({
      duration: 1000,
      delay: 100,
      smooth: 'easeInOutQuart',
      containerId: 'scroll-container',
    });
  };

  useEffect(() => {
    scrollToBottom();
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

  return (
    <div className="field-coresspodence mb-3">
      <div
        className="field-coresspodence__body msg-cotainer"
        style={styleBody}
        id="scroll-container"
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

//Імпліментація прокрутки завдяки JS . Досконало зробити не вийшло

// const myRef = createRef();
// const [scrollPosition, setScrollPosition] = useState(0);

// const easeOutQuad = t => {
//   return t;
// };

// const smoothScrollTo = (distance, duration, element) => {
//   const startTime = performance.now();
//   const scrollStep = timestamp => {
//     const currentTime = timestamp - startTime < 0 ? 0 : timestamp - startTime;
//     // console.log('timestamp ' + timestamp);
//     // console.log('currentTime ' + currentTime);
//     // console.log('empty ');

//     const easing = easeOutQuad(currentTime / duration) + 0.8;
//     console.log('distance ' + easing);
//     const scrollToPosition = distance * easing;
//     // console.log('scrollToPosition ' + easing);
//     element.scrollTop = scrollToPosition;
//     if (currentTime < duration) {
//       requestAnimationFrame(scrollStep);
//     } else {
//       setScrollPosition(distance);
//     }
//   };
//   requestAnimationFrame(scrollStep);
// };

// //
// const getScrollTop = element => {
//   const scrollTop = element.scrollTop;
//   return scrollTop;
// };

// const getScrollHeightBody = element => {
//   const scrollHeight = element.scrollHeight;
//   return scrollHeight;
// };
// const getClientHeightBody = element => {
//   const clientHeight = element.clientHeight;
//   return clientHeight;
// };

// const scrollToPosition = () => {
//   const scrollHeight = getScrollHeightBody(myRef.current) || 0;
//   const scrollTop = getScrollTop(myRef.current) || 0;
//   const clientHeight = getClientHeightBody(myRef.current) || 0;
//   const difference = scrollHeight - scrollTop - 300;
//   // console.log('scrollTop ' + scrollTop);
//   console.log('scrollHeight ' + Math.round(scrollHeight / (scrollTop + 1)));
//   // smoothScrollTo(scrollHeight, 2500, myRef.current);
// };

// useEffect(() => {
//   scrollToPosition();
// }, [arrMesseges]);
