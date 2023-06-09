// import { getDateCurrency } from '../../api/postOpenAi.js';

export const QUESTION_FOR_CHAT = 'QUESTION_FOR_CHAT';
export const REPLY_FROM_CHAT = 'REPLY_FROM_CHAT';
export const CAN_ENTER_TEXT = 'CAN_I_ENTER_TEXT';

export const questionForChat = data => {
  // console.log(data);
  return {
    type: QUESTION_FOR_CHAT,
    payload: {
      data,
    },
  };
};

export const replyFromChat = data => {
  return {
    type: REPLY_FROM_CHAT,
    payload: {
      data,
    },
  };
};

export const canEnterRequest = data => {
  return {
    type: CAN_ENTER_TEXT,
    payload: {
      data,
    },
  };
};

// export const getTimeDateNow = () => {
//   return function (dispatch) {
//     dispatch(questionForChat(getDateCurrency()));
//   };
// };
