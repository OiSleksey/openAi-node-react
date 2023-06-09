import {
  QUESTION_FOR_CHAT,
  REPLY_FROM_CHAT,
  CAN_ENTER_TEXT,
} from '../actions/chatWithOpenAi.actions';

const initialState = {
  questions: [],
  replies: [],
  canEnterMessage: true,
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTION_FOR_CHAT: {
      const newQuestion = state.questions.concat(action.payload.data);
      return {
        ...state,
        questions: newQuestion,
      };
    }
    case REPLY_FROM_CHAT: {
      const newReply = state.replies.concat(action.payload.data);
      return {
        ...state,
        replies: newReply,
      };
    }
    case CAN_ENTER_TEXT: {
      return {
        ...state,
        canEnterMessage: action.payload.data,
      };
    }
    default:
      return state;
  }
};

// export const locationReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case TODO_LIST_GET: {
//       return {
//         ...state,
//         tasksList: action.payload.taskList,
//       };
//     }
//     default:
//       return state;
//   }
// };
