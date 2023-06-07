import {
  QUESTION_FOR_CHAT,
  REPLY_FROM_CHAT,
} from '../actions/chatWithOpenAi.actions';

const initialState = {
  questions: [],
  replies: [],
};

// export const questionForChat = data => {
//   return {
//     type: QUESTION_FOR_CHAT,
//     payload: {
//       data,
//     },
//   };
// };

// export const replyFromChat = data => {
//   return {
//     type: REPLY_FROM_CHAT,
//     payload: {
//       data,
//     },
//   };
// };

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTION_FOR_CHAT: {
      const newQuestion = state.questions.concat(action.payload.data);
      console.log(newQuestion);
      return {
        ...state,
        questions: newQuestion,
      };
    }
    case REPLY_FROM_CHAT: {
      const newReply = state.replies.concat(action.payload.data);
      console.log(newReply);
      return {
        ...state,
        replies: newReply,
      };
    }
    //   case WEATHER_WEEK_SECOND_SELECTED: {
    //     return {
    //       ...state,
    //       selectedWeekday: [false, true, false, false, false, false, false],
    //     };
    //   }
    //   case WEATHER_WEEK_THIRD_SELECTED: {
    //     return {
    //       ...state,
    //       selectedWeekday: [false, false, true, false, false, false, false],
    //     };
    //   }
    //   case WEATHER_WEEK_FOURTH_SELECTED: {
    //     return {
    //       ...state,
    //       selectedWeekday: [false, false, false, true, false, false, false],
    //     };
    //   }
    //   case WEATHER_WEEK_FIFTH_SELECTED: {
    //     return {
    //       ...state,
    //       selectedWeekday: [false, false, false, false, true, false, false],
    //     };
    //   }
    //   case WEATHER_WEEK_SIXTH_SELECTED: {
    //     return {
    //       ...state,
    //       selectedWeekday: [false, false, false, false, false, true, false],
    //     };
    //   }
    //   case WEATHER_WEEK_SEVENTH_SELECTED: {
    //     return {
    //       ...state,
    //       selectedWeekday: [false, false, false, false, false, false, true],
    //     };
    //   }
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
